// Pest text and infomation displayed when the respective buttons are pressed

let aphids = `<div class="col-sm-12">
    <p class="pestheading" id="pestheading">
        Aphids
    </p>
    <div class="pestimagediv">
        <img class="pestimage"
            src="https://images.immediate.co.uk/production/volatile/sites/10/2018/02/4b618c4f-4b55-43db-976d-56c41331876e-837427f.jpg?quality=90&resize=768%2C574"
            alt="Image of Aphids">
            </div>   
            <div style="text-align: center"> 
            Image courtesy of <a style="color:blue;" href="https://www.gardenersworld.com/how-to/solve-problems/aphids/" target="_blank"> Gardeners World</a></div>
    <p>
        Aphids are a common garden pest but they can takeover hop plants, they are also key to quite a
        few hop plant disease, they chew into the stems and
        the underside of the leaves sucking on the sap,
        causing leaves to go yellow and weak young plants may become stunted, they also excrete a liquid
        call (Honeydew) that can cause other problems such as sooty mould.<br> To get rid of aphids, there are a couple of methods,<br> 
        you can purchase aphid predators such as ladybugs and get them mail order, but this can be expensive, a
        simple spray bottle with washing up liquid and water in should do it.<br> However, only as a last
        resort if you are going
        to treat your hops please do so early in the season and not after mid-august as we don't want
        soapy beer,
        Spray in the evening after any direct sunlight or the leaves will get burnt patches.
    </p>
    <p>
        Please note it's impossible, to totally get rid of aphids, so don't panic too much unless it is really bad, 
        in fact in the US the (FDA) Food and Drug Administration allows up to 2,500 aphids per 10 grams of hops YUCK!!
    </p>
    <div class="pestclosebuttondiv">
    <button class="pestclosebut btn btn-secondary buttonsclick" onclick="pestclose()" >Close</button>
    </div>
</div>`;

let spider = `<div class="col-sm-12">
<p class="pestheading" id="pestheading">
    Spider Mites
</p>
<div class="pestimagediv">
    <img class="pestimage"
        src="https://onspecialtycrops.files.wordpress.com/2015/08/leaf-bronzing.jpg?w=457&h=347"
        alt="image of Spider Mites">
        <div style="text-align: center"> 
            Image courtesy of <a style="color:blue; href="https://onspecialtycrops.ca/2015/08/07/watch-out-for-twospotted-spider-mite-on-hops/" target="_blank"> On Speciality Crops</a></div>
</div>    
<p>
    Although a little less common than Aphids, The most common species of spider-mites that affect hops is the Two-Spotted Spider Mite. 
    They tend to attack in summer if the air is very dry, they attack the underside of the leaves much the same as aphids, the leaves will get light yellow patches and start to brown at the tips, holes can also start to form,
    a real telltale sign of a serious infestation is the leaves will get a webbing form between the leaf spears, generally, at this point the leaves are dead, and the plant will become quite stunted.
    If spider mites become an issue try removing the effected area, then wet the whole plant each night after sundown, they tend not to favour moist humid foliage.
</p>
<div class="pestclosebuttondiv">
    <button class="pestclosebut btn btn-secondary buttonsclick" onclick="pestclose()" >Close</button>
</div>
    </div>`;

let sooty = ` <div class="col-sm-12">
<p class="pestheading" id="pestheading">
    Sooty Mould
</p>
<div class="pestimagediv">
    <img class="pestimage"
        src="https://extension.usu.edu/pests/ipm/images/ornamental-pest-guide/arthropods/aphid_sooty_mold_comparrison_daren_mueller_iowa_state_university_bugwood.jpg"
        alt="image of Sooty mould">
        <div style="text-align: center; color: blue;"> 
        Image courtesy of unkown
</div>        
<p>
    Sooty mould causes a layer of black mould the covers leaves and cones, it causes the leaves to
    die back and the bine to wilt, Sooty Mould grows on the honeydew left behind by aphids. To teat
    this mould you have to tackle the aphids that cause it in the first place.
</p>
<div class="pestclosebuttondiv">
    <button class="pestclosebut btn btn-secondary buttonsclick" onclick="pestclose()" >Close</button>
</div>
</div>`;

let mosaic = ` <div class="col-sm-12">
<p class="pestheading" id="pestheading">
    Mosaic Virus
</p>
<div class="pestimagediv">
    <img class="pestimage"
        src="https://www.canr.msu.edu/uploads/images/Plant%20Ag/Apple_mosaic_on_hop.jpg"
        alt="Image of Mosaic Hops Virus">
        <div style="text-align: center"> 
        Image courtesy of <a style="color:blue; href="https://www.canr.msu.edu/news/virus_visible_in_michigan_hopyards" target="_blank"> Michighan State University</a></div>
</div>        
<p>
    Caused once again by aphids, mosaic virus or hop mosaic virus is one of the most serious hop
    plant diseases. It causes yellow and green leaf mottling between the leaf veins and overall
    stunted growth of the plants.
</p>
<div class="pestclosebuttondiv">
    <button class="pestclosebut btn btn-secondary buttonsclick" onclick="pestclose()" >Close</button>
</div>
</div>`;

let vert = ` <div class="col-sm-12">
<p class="pestheading" id="pestheading">
    Verticillium wilt
</p>
<div class="pestimagediv">
    <img class="pestimage" src="https://bugwoodcloud.org/images/768x512/0656092.jpg"
        alt="Image of Verticillium wilt">
        <div style="text-align: center"> 
        Image courtesy of <a style="color:blue; href="https://www.britishhops.org.uk/pest-disease/" target="_blank"> British Hops Association</a></div>
</div>        
<p>
    This is a soil bourn disease, caused by two types of fungus, it causes yellowing of the leaves
    that start at the base of the plant, the bines can also look swollen, brown and discoloured.
    Heavily infected plants tend to die on the string, usually just before or at harvest!
    A common treatment is to let the plants become resistant to it, so remove the infected leaves
    and bines.
</p>
<div class="pestclosebuttondiv">
    <button class="pestclosebut btn btn-secondary buttonsclick" onclick="pestclose()" >Close</button>
</div>
</div>`;

let mildew = `<div class="col-sm-12">
<p class="pestheading" id="pestheading">
    Downy Mildew & Powdery Mildew
</p>
<div class="pestimagediv">
    <img class="pestimage"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Downy_and_Powdery_mildew_on_grape_leaf.JPG"
        alt="Image of Downy mildew">
        <div style="text-align: center"> 
        Image courtesy of <a style="color:blue; href="https://en.wikipedia.org/wiki/Downy_mildew" target="_blank"> Wikipedia</a></div>
</div>    
<p>
    Downy Mildew, causes the plant to become stunted. The cones brown and curl and the underside of
    leaves become mottled with brown lesions and a yellow halo.
</p>
<p>
    Powdery Mildew, causes white fungus spots on the leaves. Pale green to yellow spots on the
    leaves
    with white patches on the stems and cones. The plant's growth will be slow and the leaves
    become covered with the white mildew.
</p>
<div class="pestclosebuttondiv">
    <button class="pestclosebut btn btn-secondary buttonsclick" onclick="pestclose()" >Close</button>
</div>
</div>`;

let nute = `<div class="col-sm-12">
<p class="pestheading" id="pestheading">
    Nutrient deficiency
</p>
<div class="pestimagediv">
    <img class="pestimage" src="https://onspecialtycrops.files.wordpress.com/2015/07/hopperburn.jpg"
        alt="Image of Nutrient deficiency in hop plants">
        <div style="text-align: center; color:blue;"> 
        Image courtesy of unkown</a>
</div>    
<p>
    By far the most common problem, other than over or under watering, especially in potted hops plants are nutrient deficiencies. <br>Hops strip the
    soil of nutrients, in the ground decaying plant matter will normally become the food of choice,
    but in pots, they tend to suffer.
    Chicken manure pellets are a good way of feeding hops plants but use them sparingly as high
    nitrogen levels can cause Verticillium wilt to rear its ugly head.
    Alternatively, repot the hops with good quality compost, try to get the best quality you budget
    will allow, and avoid the idea of 99p bags of compost, cheaper grades of compost can
    commonly contain Chafer grubs that will have a field day chewing on you hops rhizome.
</p>
<p>More info on nutrient deficiencies can be found <a style="color:blue;" href="https://www.usahops.org/cabinet/data/9.pdf" target="_blank">here</a></p>
<div class="pestclosebuttondiv">
    <button class="pestclosebut btn btn-secondary buttonsclick" onclick="pestclose()" >Close</button>
</div>
</div>`;