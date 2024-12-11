import { loadImages } from './loadImages.js';

document.addEventListener('DOMContentLoaded', () => {
    const nameSearch = document.getElementById('nameSearch');
    const regionSelect = document.getElementById('regionSelect');
    const districtSearch = document.getElementById('districtSearch');
    const closeBtn = document.querySelector('.close');
    const modal = document.getElementById('memberModal');

    // 카드 필터링 함수
    function filterCards() {
        const nameValue = nameSearch.value.toLowerCase();
        const districtValue = districtSearch.value.toLowerCase();
        const regionValue = regionSelect.value.toLowerCase();

        document.querySelectorAll('.col').forEach(card => {
            const name = card.querySelector('.card-title').textContent.toLowerCase();
            const district = card.querySelector('.card-district').textContent.toLowerCase();
            const region = card.querySelector('.card-region').textContent.toLowerCase();

            const matchesName = name.includes(nameValue);
            const matchesDistrict = district.includes(districtValue);
            const matchesRegion = region.includes(regionValue);  // 지역 필터링

            card.style.display = (matchesName && matchesDistrict && matchesRegion) ? '' : 'none';
        });
    }

    nameSearch.addEventListener('input', filterCards);
    districtSearch.addEventListener('input', filterCards);
    regionSelect.addEventListener('change', filterCards);
    closeBtn.addEventListener('click', () => (modal.style.display = 'none'));

    // 팝업 내용 설정
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalDistrict = document.getElementById('modalDistrict');

    // 이미지 클릭 시 팝업 내용 설정
    const imageDir = './assets/images/';
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const image = card.querySelector('img');
            const name = card.querySelector('.card-title').textContent;
            const district = card.querySelector('.card-text').textContent;

            modalImage.src = image.src;
            modalName.textContent = name;
            modalDistrict.textContent = district;
            modal.style.display = 'flex';  // 팝업 표시
        });
    });

    loadImages();
});
