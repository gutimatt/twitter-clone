const URL = "http://localhost:3000/tweets";

let nextPageUrl = null;

const onEnter = (e) => {
    if(e.key == 'Enter'){
        getTwitterData()
    }
}
 

onNextPage = () => {
    if (nextPageUrl){
        getTwitterData(true)
    }
}

/**
 * Retrive Twitter Data from API
 */

 const getTwitterData = (nextPage=false) => {
    let input = document.getElementById('user-search-input').value 
    if(!input) return
    const encodedInput = encodeURIComponent(input);
    let fullURL = `http://localhost:3000/tweets?q=${encodedInput}&count=10`;
    if (nextPage && nextPageUrl) {
        fullURL = nextPageUrl
    }
    fetch(fullURL)
    .then((response) => {
        return response.json()
    }).then((data) => {
        buildTweets(data.statuses, nextPage);
        saveNextPage(data.search_metadata)
        nextPageButtonVisibility(data.search_metadata)
    })   
}



/**
 * Save the next page data
 */
const saveNextPage = (metadata) => {
    if(metadata.next_results){
        nextPageUrl = `${URL}${metadata.next_results}`;
    }else {
        nextPageUrl = null;
    }
}

/**
 * Handle when a user clicks on a trend
 */
const selectTrend = (e) => { 
    const search = e.innerText
    document.getElementById('user-search-input').value = search
    getTwitterData()
}

/**
 * Set the visibility of next page based on if there is data on next page
 */
const nextPageButtonVisibility = (metadata) => { 
    if(metadata){
        document.querySelector('.next-page-container').style.visibility = 'visible'
    }else{
        document.querySelector('.next-page-container').style.visibility = 'hidden'
    }
}

/**
 * Build Tweets HTML based on Data from API
 */
const buildTweets = (tweets, nextPage) => { 
    let twitterContent = "";
    tweets.map((tweet) => {
        const createdDate = moment(tweet.created_at).fromNow()
        twitterContent += `
            <div class="tweet-container">
                <div class="user-info-container"> 
                    <div class="tweet-user-profile">
                        <image src="${tweet.user.profile_image_url_https}"></image>
                     </div>
                    <div class="tweet-username-container">
                        <div class="tweet-username">
                            ${tweet.user.name}
                        </div>
                        <div class="tweet-userhandle">
                            ${tweet.user.screen_name}
                        </div>
                    </div>
                </div>
                `
        if( tweet.extended_entities && 
            tweet.extended_entities.media &&
            tweet.extended_entities.media.length > 0) {
            twitterContent += buildImages(tweet.extended_entities.media);
            twitterContent += buildVideo(tweet.extended_entities.media);
        }               
                                
        twitterContent +=`
                <div class="tweet-text-container">
                    ${tweet.full_text}
                </div>
                <div class="tweet-date-container">
                    ${createdDate}
                </div>
            </div>
        ` 
    });

    if (nextPage) {
        document.querySelector('.tweets-list').insertAdjacentHTML("beforeend", twitterContent)
    }else {
        document.querySelector('.tweets-list').innerHTML = twitterContent;
    }
}

/**
 * Build HTML for Tweets Images
 */
const buildImages = (mediaList) => {
    let imagesContent = `<div class="tweet-image-container">`;
    let imageExists = false;
    mediaList.map((media) => {
        if (media.type == "photo"){
            imageExists = true;
            imagesContent += `<div class="tweet-image" style="background-image: url(${media.media_url_https})"></div>`
        }
    });
    imagesContent += `</div>`
    return imageExists ? imagesContent: '';
}

/**
 * Build HTML for Tweets Video
 */
const buildVideo = (mediaList) => {
    let videoContent = `<div class="tweet-video-container">`;
    let videoExist = false;
    mediaList.map((media) => {
        if (media.type == "video"){
            videoExist = true;
            const videoVariant = media.video_info.variants.find((variant) => variant.content_type == "video/mp4")
            videoContent += `
            <video controls>
                <source type="video/mp4" src="${videoVariant.url}" > 
            </video>
            `
        } else if (media.type == "animated_gif"){
            videoExist = true;
            const videoVariant = media.video_info.variants.find((variant) => variant.content_type == "video/mp4")
            videoContent += `
            <video loop autoplay>
                <source type="video/mp4" src="${videoVariant.url}" > 
            </video>
            `
        }
    });
    videoContent += `</div>`
    return videoExist ? videoContent: '';
}
