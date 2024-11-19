// 슬라이드 및 네비게이션 버튼 제어
document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    let isClickable = true; // 클릭 가능 여부를 저장
    const slides = document.querySelectorAll("#slide .car");
    const totalSlides = slides.length;
    const carNames = document.querySelectorAll("#carName h2");
    const carInfos = document.querySelectorAll("#footer .carInfo");
    const rollSlides = document.querySelectorAll("#rollingNumber .roll-slide");
    const price = document.querySelectorAll("#rollingNumber .roll-slide .roll-num:first-child");


    const nextButton = document.querySelector("#arrow button:last-child");
    const prevButton = document.querySelector("#arrow button:first-child");
    const indicators = document.querySelectorAll("#circle div");
    

    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
        carNames.forEach((carName, i) => {
            carName.style.transform = `translateX(-${index * 100}%)`;
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.remove("red");
            if (i === index) {
                indicator.classList.add("red");
            }
        });
    }

    const toLeftMove = () => {
        nextButton.disabled = true;
        prevButton.disabled = true;

        // 차량 이름 애니니메이션
        const selectCar = document.querySelectorAll("#carName .select")[0];

        selectCar.classList.remove('select');
        selectCar.nextElementSibling.classList.add('select');

        // 바퀴에 회전 애니메이션 추가
        const leftTiers = document.querySelectorAll('.left_tier');
        const rightTiers = document.querySelectorAll('.right_tier');

        leftTiers.forEach(tier => tier.classList.add('counterclockwise_rotating'));
        rightTiers.forEach(tier => tier.classList.add('counterclockwise_rotating'));

        /* slide.style.transition = "left 3s"; */

        setTimeout(() => {
            // 바퀴 회전 애니메이션 제거
            const leftTiers = document.querySelectorAll('.left_tier');
            const rightTiers = document.querySelectorAll('.right_tier');

            leftTiers.forEach(tier => tier.classList.remove('counterclockwise_rotating'));
            rightTiers.forEach(tier => tier.classList.remove('counterclockwise_rotating'));

            nextButton.disabled = false;
            prevButton.disabled = false;
        }, 2500);
    }

    const toRightMove = () => {
        nextButton.disabled = true;
        prevButton.disabled = true;

        // 차량 이름 애니니메이션
        const selectCar = document.querySelectorAll("#carName .select")[0];

        selectCar.classList.remove('select');
        selectCar.previousElementSibling.classList.add('select');

        // 바퀴에 회전 애니메이션 추가
        const leftTiers = document.querySelectorAll('.left_tier');
        const rightTiers = document.querySelectorAll('.right_tier');

        leftTiers.forEach(tier => tier.classList.add('clockwise_rotating'));
        rightTiers.forEach(tier => tier.classList.add('clockwise_rotating'));

        /* slide.style.transition = "left 3s"; */

        setTimeout(() => {
            // 바퀴 회전 애니메이션 제거
            const leftTiers = document.querySelectorAll('.left_tier');
            const rightTiers = document.querySelectorAll('.right_tier');

            leftTiers.forEach(tier => tier.classList.remove('clockwise_rotating'));
            rightTiers.forEach(tier => tier.classList.remove('clockwise_rotating'));

            nextButton.disabled = false;
            prevButton.disabled = false;
        }, 2500);
    }

    const counterclockwise_rotating = () => {
        nextButton.disabled = true;
        prevButton.disabled = true;
        isClickable = false; // 클릭 비활성화

        // 바퀴에 회전 애니메이션 추가
        const leftTiers = document.querySelectorAll('.left_tier');
        const rightTiers = document.querySelectorAll('.right_tier');

        leftTiers.forEach(tier => tier.classList.add('counterclockwise_rotating'));
        rightTiers.forEach(tier => tier.classList.add('counterclockwise_rotating'));

        setTimeout(() => {
            // 바퀴 회전 애니메이션 제거
            const leftTiers = document.querySelectorAll('.left_tier');
            const rightTiers = document.querySelectorAll('.right_tier');

            leftTiers.forEach(tier => tier.classList.remove('counterclockwise_rotating'));
            rightTiers.forEach(tier => tier.classList.remove('counterclockwise_rotating'));

            nextButton.disabled = false;
            prevButton.disabled = false;
            isClickable = true; // 클릭 활성화
        }, 2500);
    }

    const clockwise_rotating = () => {
        nextButton.disabled = true;
        prevButton.disabled = true;
        isClickable = false; // 클릭 비활성화

        // 바퀴에 회전 애니메이션 추가
        const leftTiers = document.querySelectorAll('.left_tier');
        const rightTiers = document.querySelectorAll('.right_tier');

        leftTiers.forEach(tier => tier.classList.add('clockwise_rotating'));
        rightTiers.forEach(tier => tier.classList.add('clockwise_rotating'));

        setTimeout(() => {
            // 바퀴 회전 애니메이션 제거
            const leftTiers = document.querySelectorAll('.left_tier');
            const rightTiers = document.querySelectorAll('.right_tier');

            leftTiers.forEach(tier => tier.classList.remove('clockwise_rotating'));
            rightTiers.forEach(tier => tier.classList.remove('clockwise_rotating'));

            nextButton.disabled = false;
            prevButton.disabled = false;
            isClickable = true;  // 클릭 활성화
        }, 2500);
    }

    function changeInfo(index) {
        carInfos[index - 1].style.transform = "translateY(-100%)";
        carInfos[index - 1].style.opacity = "0";
        /* carInfos[index].style.transform = "translateY(100%)"; */
        carInfos[index].style.opacity = "1";
    }



    function updatePrice(index) {
        rollSlides.forEach(slide => {
            // 애니메이션을 재실행하려면 요소의 클래스를 잠시 제거했다가 다시 추가
            slide.style.animation = 'none';
            slide.offsetHeight; // 트리거를 위해 강제로 리플로우 발생
            slide.style.animation = ''; // 초기화하여 애니메이션 재실행
        });
        if (index == 0) {
            price[0].textContent = 3
            price[1].textContent = 3
            price[2].textContent = 6
            price[3].textContent = 0
        } else if (index == 1) {
            price[0].textContent = 7
            price[1].textContent = 7
            price[2].textContent = 0
            price[3].textContent = 0
        } else if (index == 2) {
            price[0].textContent = 2
            price[1].textContent = 8
            price[2].textContent = 3
            price[3].textContent = 1
        } else if (index == 3) {
            price[0].textContent = 2
            price[1].textContent = 7
            price[2].textContent = 7
            price[3].textContent = 1
        }
    }


    function updateFilter(index) {
        slides.forEach(slide => {
            slide.style.filter = "brightness(30%)";
        })
        slides[index].style.filter = "brightness(100%)";
    }



    nextButton.addEventListener("click", () => {
        if (currentIndex == 3) return;

        //현재 Index 애니메이션
        carInfos[currentIndex].style.transition = "all 2s";
        carInfos[currentIndex].style.transform = "translateY(-100%)";
        carInfos[currentIndex].style.opacity = "0";


        //바뀔 Index 애니메이션
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide(currentIndex);
        toLeftMove();
        updatePrice(currentIndex);
        updateFilter(currentIndex);

        carInfos[currentIndex].style.transition = "all 2s";
        carInfos[currentIndex].style.transform = "translateY(0)";
        carInfos[currentIndex].style.opacity = "1";

        setTimeout(() => {
            carInfos[currentIndex - 1].style.transform = "translateY(100%)";
            carInfos[currentIndex - 1].style.transition = "none";
        }, 2000);
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex == 0) return;

        //현재 Index 애니메이션
        carInfos[currentIndex].style.transition = "all 2s";
        carInfos[currentIndex].style.transform = "translateY(-100%)";
        carInfos[currentIndex].style.opacity = "0";

        //바뀔 Index 애니메이션
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide(currentIndex);
        toRightMove();
        updatePrice(currentIndex);
        updateFilter(currentIndex);

        carInfos[currentIndex].style.transition = "all 2s";
        carInfos[currentIndex].style.transform = "translateY(0)";
        carInfos[currentIndex].style.opacity = "1";

        setTimeout(() => {
            carInfos[currentIndex + 1].style.transform = "translateY(100%)";
            carInfos[currentIndex + 1].style.transition = "none";
        }, 2000);
    });

    carNames.forEach((carName, index) => {
        carName.addEventListener("click", () => {
            if (nextButton.disabled) return;
            if (prevButton.disabled) return;
            if (isClickable) {
                // Index 차이
                const x = currentIndex - index;

                //현재 Index 애니메이션
                if (currentIndex < index) counterclockwise_rotating();
                else if (currentIndex > index) clockwise_rotating();
                else return;

                carInfos[currentIndex].style.transition = "all 2s";
                carInfos[currentIndex].style.transform = "translateY(-100%)";
                carInfos[currentIndex].style.opacity = "0";

                //바뀔 Index 애니메이션
                currentIndex = index;
                updateSlide(currentIndex);
                updatePrice(currentIndex);
                updateFilter(currentIndex);

                carInfos[currentIndex].style.transition = "all 2s";
                carInfos[currentIndex].style.transform = "translateY(0)";
                carInfos[currentIndex].style.opacity = "1";

                setTimeout(() => {
                    carInfos[currentIndex + x].style.transform = "translateY(100%)";
                    carInfos[currentIndex + x].style.transition = "none";
                }, 2000);

                // 차량 이름 애니니메이션
                const selectCar = document.querySelectorAll("#carName .select")[0];

                selectCar.classList.remove('select');
                carName.classList.add('select');
            };
        });
    });


});
