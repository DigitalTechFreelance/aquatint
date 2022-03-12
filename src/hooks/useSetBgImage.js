import { useEffect } from 'react'

function useSetBgImage(parentObjClass, imageClass) {
    const setImgBg = (imgArr, parentObjArr) => {
        imgArr.forEach((item, index) => {
            let imgSrc = item.currentSrc || item.src
            let styles = {
                'background-image': `url(${imgSrc})`
            }
            Object.assign(parentObjArr[index].style, styles)
            item.style.display = 'none';
        })
    }
    useEffect(() => {
        let imgArr = document.querySelectorAll(`${imageClass}`);
        let parentObjArr = document.querySelectorAll(`${parentObjClass}`);
        setTimeout(() => {
            setImgBg(imgArr, parentObjArr)
        }, 200)


        window.addEventListener("resize", () => {
            setImgBg(imgArr, parentObjArr)
        });

        window.addEventListener("load", () => {
            setImgBg(imgArr, parentObjArr)
        });

        return () => {
            window.removeEventListener("resize", () => {
                setImgBg(imgArr, parentObjArr)
            });
        }
    })
}

export default useSetBgImage
