"use strict";

let media_folder = '../static/media/';
let card_image = ['https://www.youtube-nocookie.com/embed/hvszUiek8Ao','landing/newbristol.png','https://www.youtube-nocookie.com/embed/Xnt3bIhDxqQ?si=-pfGbmC2KWS-R2oX',
 'landing/hoppiness.jpg', 'landing/Lefthanded.png', "landing/B247.png"];
let card_date = ["21/10/2022", "20/08/2023", "21/10/2023", "19/03/2024",  "27/05/2024", "28/05/2024"];


let card_info = [
["Our very own Guy Manchester landed a slot on BBC Radio Bristol talking to Steve Yabsley about East Bristol Hops."],

["Due to the closing of Dawkins Ales, Team BHC have been in talks with breweries across Bristol to find a new\
brewing partner to brew the 2023 Bristol Hops Collective brew. We are delighted to announce that <a href='https://www.newbristolbrewery.co.uk/' target='_blank'>New Bristol Brewery</a>\
 will be stepping in for this years brew. We certainly look forward to what amazing beer the team is going to produce."],

[" The 2023 brew was a collaberation with <a href='https://www.newbristolbrewery.co.uk/' target='_blank'>New Bristol Brewery</a>. The beer was called Home Grown Golden Ale. It contained\
 57.70kg of Bristol Hops Collective hops and was a tasty beer for sure see how we did on <a href='https://untappd.com/b/new-bristol-brewery-homegrown/5555982' target='_blank'>Untapped</a>\
</div>"],

["Guy Manchester has been working hard createing the Hoppiness: Brewing with care homes.<br><br>  The Hoppiness project involves working alongside older adults living in care homes, their carers, \
and local brewers to explore the histories and cultures of brewing in the South West and build towards the production of a beer through communal hop growing.<br><br>  This co-produced project was borne \
out of a desire to disrupt entrenched cultural representations of people with dementia, which deprive them of personhood by defining them purely in terms of cognitive decline that results in\
 an ‘unbecoming’ or loss of self. It also seeks to break from the largely biomedical focus of research on people with dementia in care homes, in which they are often framed as passive recipients \
  of care that is oriented purely around the meeting of bodily needs.<br> \
<a href='https://www.bristol.ac.uk/brigstow/research/projects/2024/hoppiness-ep.html?fbclid=IwZXh0bgNhZW0CMTAAAR2r7Lmb4lcfx_p5jTf07RCynnTaZ2jGnIEFyaXeUX6rQpZz1YAZFPljUGI_aem_AaC9MWBA06MYpd1MCl_bunsNjxF45PYTs7sYyetrm30IBG4-r9DjLGOYW67j9Fq2kopI0UJRaAXbhij6aYWYOGkz' target='_blank'>More here</a>"],

[" We are super excited to announce that the 2024 brew will be a collaboration with <a href='https://lefthandedgiant.com/' target='_blank'>Left Handed Giant</a>. The brew team at \
the St Philips brewery are keen to see how they can craft our hops into something special, and we are to. Pop back soon\
for updates on when the collaboration will happen but it look like mid September 2024."],

["A people-powered community-grown real ale will be brewed in Bristol again in 2024. <br >Bristol Hops Collective will be partnering with Left Handed Giant to make the beer from hops grown in back gardens and allotments across our city.\
 Established in 2016, the most recent crop of fresh green hops measured a record 60kg.\ <br><br> Originally collaborating with the now sadly closed Dawkins in Easton, the initiative is now nomadic with New Bristol Brewery in St Paul’s brewing \
the record harvest in 2023.<br><br>\
A Bristol Hops Collective spokesperson said that they “couldn’t be happier to partner with Left Handed Giant to create this year’s edition of our uniquely Bristolian, green-hopped real ale”.\
 “As a local brewery owned and operated by the people who work for them and those who drink their beer, they make the perfect partner for us as a community-based growing and drinking project.\
 “We can’t wait to sample the beer they make with our hops.”<br><a href='https://www.bristol247.com/food-and-drink/news-food-and-drink/bristol-hops-collective-return-new-brewery-partner/' target='_blank'>More here</a>"]
]


function modal_open(data, video){
    let myModal = new bootstrap.Modal(document.getElementById('newsModal'), {
        keyboard: false
    })

    let date = document.getElementById('date');
        date.innerHTML = `${card_date[data]}`
    let image =  document.getElementById('image');
   
    if(!video){
        image.innerHTML = ` <img class="modal-image" src="${media_folder}${card_image[data]}" id="image">`
    }else{
        image.innerHTML = `<iframe class="videoplayer" src="${card_image[data]}" SameSite=Lax title="YouTube video player" frameborder="1" 
        allow="encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
        
    let text =  document.getElementById('text');
        text.innerHTML = `${card_info[data]}`;
    
    myModal.show();
}

function close_modal(){
    myModal.dispose()
}