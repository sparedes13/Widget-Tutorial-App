import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Convert = ({ language, text }) => {

    const [translateText, setTranslateText] = useState('')
    useEffect(() => {

        const doTranslation = async () => {
            const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })

            setTranslateText(response.data.data.translations[0])
            //console.log(translatedText)
        }

        const timeoutId = setTimeout(() => {
            if (text) {
                doTranslation();
            }
        }, 500);
        return () => clearTimeout(timeoutId);

    }, [language, text])
    return (
        <div onClick={() => (console.log(translateText))}>
            {translateText.translatedText}
        </div>
    )
}
