import React, { useState } from 'react'

import iconSticker1 from '../../images/mainBodyForm/iconSticker1.png'
import iconSticker2 from '../../images/mainBodyForm/iconSticker2.png'
import iconSticker3 from '../../images/mainBodyForm/iconSticker3.png'
import iconSticker4 from '../../images/mainBodyForm/iconSticker4.png'

import style from '../../style/MainBodyForm.module.css'



const Sticker = (props) => {
    return (
        <div className={style.sticker} style={{ backgroundColor: props.color, width: props.width }}>
            <div>
                <img alt="" src={props.icon} />
            </div>
            <div>
                <h3>{props.label}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

const FormGroup = (props) => {
    const FormGroupRend = props.items.map((item, index) =>
        <label key={index}>{item.label}
            <input type={item.type} placeholder={item.label} name={item.label} onChange={props.handleChange} value={item.value} />
        </label>
    )
    return (
        <div className={style.FormGroup}>
            {FormGroupRend}
        </div>
    )
}

const Form = () => {
    const initialFormValues = { Field1: "", Field2: "", Field3: "", Field4: "", Field5: "", Field6: "", Field7: "", Field8: "", Field9: "", Field10: "" }
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("This functionality has not been added to this project yet! Check for the received inputs in the console output!")
        console.log(formValues)
        setFormValues(initialFormValues)
    }

    const handleChange = (e) => {
        const name = e.target.name
        let formValuesCopy = Object.assign({}, formValues)
        formValuesCopy[name] = e.target.value
        setFormValues(formValuesCopy);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup
                items={[{ label: "Field1", type: "text", value: formValues.Field1 }, { label: "Field2", type: "text", value: formValues.Field2 }, { label: "Field3", type: "text", value: formValues.Field3 }]}
                handleChange={handleChange} />
            <FormGroup
                items={[{ label: "Field4", type: "text", value: formValues.Field4 }, { label: "Field5", type: "text", value: formValues.Field5 }, { label: "Field6", type: "text", value: formValues.Field6 }]}
                handleChange={handleChange} />
            <FormGroup
                items={[{ label: "Field7", type: "text", value: formValues.Field7 }, { label: "Field8", type: "text", value: formValues.Field8 }, { label: "Field9", type: "text", value: formValues.Field9 }]}
                handleChange={handleChange} />
            <div className={style.FormGroup}>
                <label> Field10
                    <textarea name="Field10" placeholder="Field10" onChange={handleChange} value={formValues.Field10} />
                </label>
            </div>
            <div className={style.formButton}>
                <input type="submit" value="Submit" />
            </div>

        </form>
    )
}

export const MainBodyForm = () => {
    return (
        <div className={style.mainBodyForm}>
            <div className={style.stickers}>
                <Sticker
                    color="#27317D"
                    width="23%"
                    icon={iconSticker1}
                    label="What is Lorem Ipsum?"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <Sticker
                    color="#DC143C"
                    width="23%"
                    icon={iconSticker2}
                    label="Why do we use it?"
                    text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                <Sticker
                    color="#2ECC40"
                    width="23%"
                    icon={iconSticker3}
                    label="Where does it come from?"
                    text="Contrary to popular belief, Lorem Ipsum is not simply random text." />
                <Sticker
                    color="#FF851B"
                    width="23%"
                    icon={iconSticker4}
                    label="Where can I get some?"
                    text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
            </div>
            <div className={style.formDiv}>
                <div className={style.header}>
                    <p>Form</p>
                </div>
                <Form />
            </div>
        </div>
    )
}