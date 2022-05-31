const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const girlBtn = document.getElementById('change-girl');
const girlImg = document.getElementById('girl');
const getGirls = async() => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpur;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async() => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await getGirls();
}

loadImg();

const btn = document.getElementById('change-girl');
girlBtn.addEventListener('click', loadImg);