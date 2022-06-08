import React, { useEffect, useState } from 'react'


export const Form = () => {
    const [form, setform] = useState({
        username: "",
        email: "",
        password: "",
        age: 5,
        isindian: false
    })
    const handleChange = (e) => {

        let { type, checked, name, value,files } = e.target
        if (type == "checkbox") {
            setform({ ...form, [name]: checked, })
        }
        else if (type === "file") {
            setform({ ...form, [name]: files, })
        }
        else { setform({ ...form, [name]: value, }) }

        console.log(form);
    }
    const handlesubmit = (e)=>{
e.preventDefault()
console.log(form);
    }
    return (
        <div>Form
            <form onSubmit={handlesubmit}  ><input type="text"
                name="username"
                placeholder='enter name'
                value={form.name}
                onChange={handleChange}

            /> <input type="text"
                name="email"
                placeholder='enter email'
                value={form.email}
                onChange={handleChange}

                /> <input type="text"
                    name="password"
                    placeholder='enter password'
                    value={form.password}
                    onChange={handleChange}

                />
                <input type="number"
                    name="age"
                    placeholder='enter age'
                    value={form.age}
                    onChange={handleChange}

                />
                <input type="checkbox"
                    name="isindian"

                    checked={form.isindian}
                    onChange={handleChange}

                />  <label>isindian</label>

                <input type="radio"
                    name="gender"

                    value="female"
                    onChange={handleChange}

                />  <label>female</label><input type="radio"
                    name="gender"

                    value="male"
                    onChange={handleChange}

                />  <label>male</label>


                <div>


                    <input
                        type="file"
                        name="resume"
                        files={form.resume}
                        onChange={handleChange}


                    />
                </div>
                <button type='submit'  >submit</button>
            </form>



        </div>
    )
}
