export async function loadImages() {
    const imageDir = './assets/images/';
    const cardContainer = document.getElementById('cardContainer');
    
    const images = [
        { filename: '강대식_대구 동구군위을.png' },
        { filename: '강명구_경북 구미을.png' },
        { filename: '강민국_경남 진주을.png' },
        { filename: '강선영_비례대표.png' },
        { filename: '강승규_충남 홍성예산.png' },
        { filename: '고동진_서울 강남병.png' },
        { filename: '곽규택_부산 서동.png' },
        { filename: '구자근_경북 구미갑.png' },
        { filename: '권성동_강원 강릉.png' },
        { filename: '권영세_서울 용산.png' },
        { filename: '권영진_대구 달서병.png' },
        { filename: '김건_비례대표.png' },
        { filename: '김기웅_대구 중남.png' },
        { filename: '김기현_울산 남구을.png' },
        { filename: '김대식_부산 사상.png' },
        { filename: '김도읍_부산 강서.png' },
        { filename: '김미애_부산 해운대을.png' },
        { filename: '김민전_비례대표.png' },
        { filename: '김상훈_대구 서.png' },
        { filename: '김석기_경북 경주.png' },
        { filename: '김선교_경기 여주양평.png' },
        { filename: '김성원_경기 동두천양주연천을.png' },
        { filename: '김소희_비례대표.png' },
        { filename: '김승수_대구 북구을.png' },
        { filename: '김용태_경기 포천가평.png' },
        { filename: '김위상_비례대표.png' },
        { filename: '김은혜_경기 성남분당을.png' },
        { filename: '김장겸_비례대표.png' },
        { filename: '김재섭_서울 도봉갑.png' },
        { filename: '김정재_경북 포항북.png' },
        { filename: '김종양_경남 창원의창.png' },
        { filename: '김태호_경남 양산을.png' },
        { filename: '김형동_경북 안동예천.png' },
        { filename: '김희정_부산 연제.png' },
        { filename: '나경원_서울 동작을.png' },
        { filename: '박대출_경남 진주갑.png' },
        { filename: '박덕흠_충북 보은옥천영동괴산.png' },
        { filename: '박상웅_경남 밀양의령함안창녕.png' },
        { filename: '박성민_울산 중.png' },
        { filename: '박성훈_부산 북구을.png' },
        { filename: '박수민_서울 강남을.png' },
        { filename: '박수영_부산 남.png' },
        { filename: '박정하_강원 원주갑.png' },
        { filename: '박정훈_서울 송파갑.png' },
        { filename: '박준태_비례대표.png' },
        { filename: '박충권_비례대표.png' },
        { filename: '박형수_경북 의성청송영덕울진.png' },
        { filename: '배준영_인천 중강화옹진.png' },
        { filename: '배현진_서울 송파을.png' },
        { filename: '백종헌_부산 금정.png' },
        { filename: '서명옥_서울 강남갑.png' },
        { filename: '서범수_울산 울주.png' },
        { filename: '서일준_경남 거제.png' },
        { filename: '서지영_부산 동래.png' },
        { filename: '서천호_경남 사천남해하동.png' },
        { filename: '성일종_충남 서산태안.png' },
        { filename: '송석준_경기 이천.png' },
        { filename: '송언석_경북 김천.png' },
        { filename: '신동욱_서울 서초을.png' },
        { filename: '신성범_경남 산청함양거창합천.png' },
        { filename: '안상훈_비례대표.png' },
        { filename: '엄태영_충북 제천단양.png' },
        { filename: '우재준_대구 북구갑.png' },
        { filename: '유상범_강원 홍천횡성영월평창.png' },
        { filename: '유영하_대구 달서갑.png' },
        { filename: '유용원_비례대표.png' },
        { filename: '윤상현_인천 동미추홀을.png' },
        { filename: '윤영석_경남 양산갑.png' },
        { filename: '윤재옥_대구 달서을.png' },
        { filename: '윤한홍_경남 창원마산회원.png' },
        { filename: '이달희_비례대표.png' },
        { filename: '이만희_경북 영천청도.png' },
        { filename: '이상휘_경북 포항남울릉.png' },
        { filename: '이성권_부산 사하갑.png' },
        { filename: '이양수_강원 속초인제고성양양.png' },
        { filename: '이인선_대구 수성을.png' },
        { filename: '이종배_충북 충주.png' },
        { filename: '이종욱_경남 창원진해.png' },
        { filename: '이철규_강원 동해태백삼척정선.png' },
        { filename: '이헌승_부산 부산진을.png' },
        { filename: '인요한_비례대표.png' },
        { filename: '임이자_경북 상주문경.png' },
        { filename: '임종득_경북 영주영양봉화.png' },
        { filename: '장동혁_충남 보령서천.png' },
        { filename: '정동만_부산 기장.png' },
        { filename: '정성국_부산 부산진갑.png' },
        { filename: '정연욱_부산 수영.png' },
        { filename: '정점식_경남 통영고성.png' },
        { filename: '정희용_경북 고령성주칠곡.png' },
        { filename: '조경태_부산 사하을.png' },
        { filename: '조배숙_비례대표.png' },
        { filename: '조승환_부산 중영도.png' },
        { filename: '조은희_서울 서초갑.png' },
        { filename: '조정훈_서울 마포갑.png' },
        { filename: '조지연_경북 경산.png' },
        { filename: '주진우_부산 해운대갑.png' },
        { filename: '주호영_대구 수성갑.png' },
        { filename: '진종오_비례대표.png' },
        { filename: '최보윤_비례대표.png' },
        { filename: '최수진_비례대표.png' },
        { filename: '최은석_대구 동구군위갑.png' },
        { filename: '최형두_경남 창원마산합포.png' },
        { filename: '추경호_대구 달성.png' },
        { filename: '한기호_강원 춘천철원화천양구을.png' },
        { filename: '한지아_비례대표.png' },
    ];

    images.forEach(({ filename }) => {
        // 파일명에서 '.png' 확장자를 제거하고, '_'로 분리하여 이름과 지역+지역구를 추출
        const [name, regionAndDistrict] = filename.replace('.png', '').split('_');
        
        // 지역과 지역구를 분리
        let region = '';
        let district = '';
    
        // 지역과 지역구를 나누는 조건
        if (regionAndDistrict.includes(' ')) {
            [region, district] = regionAndDistrict.split(' ');
        } else {
            region = regionAndDistrict;  // 지역만 존재하는 경우
            district = '비례대표';        // 지역구가 없는 경우, '비례대표'로 설정
        }
    
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
            <div class="card">
                <img src="${imageDir + filename}" alt="${name}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">
                        <span class="card-region">${region}</span> 
                        <span class="card-district">${district}</span>
                    </p>
                </div>
            </div>`;
        
        // 클릭 시 팝업 표시
        card.addEventListener('click', () => {
            const modal = document.getElementById('memberModal');
            const modalImage = document.getElementById('modalImage');
            const modalName = document.getElementById('modalName');
            const modalDistrict = document.getElementById('modalDistrict');
    
            modalImage.src = imageDir + filename;
            modalName.textContent = name;
            modalDistrict.textContent = region + " " + district;  // 지역구가 없으면 '비례대표' 표시
            modal.style.display = 'block';
        });
        
        cardContainer.appendChild(card);
    });    
}
