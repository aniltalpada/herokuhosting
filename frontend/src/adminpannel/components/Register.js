import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';

const Register = () => {

    const { udata, setUdata } = useContext(adddata);

    const history = useHistory();

    const [inpval, setINP] = useState({
        name : "",
        producttype: "",
        producttitle: "",
        totalstock: "",
        costperitem: "",
        desc: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();

        const { name, producttype, producttitle, totalstock, costperitem, desc } = inpval;

        const res = await fetch("https://crudappreactjs.herokuapp.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, producttype, producttitle, totalstock, costperitem, desc
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            history.push("/")
            setUdata(data)
            console.log("data added");

        }
    }

    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputproducttype1" className="form-label">Product Code</label>
                        <input type="number" value={inpval.name} onChange={setdata} name="name" className="form-control" id="exampleInputname"  />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">producttype</label>
                        <input type="text" value={inpval.producttype} onChange={setdata} name="producttype" className="form-control" id="exampleInputproducttype" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">producttitle</label>
                        <input type="text" value={inpval.producttitle} onChange={setdata} name="producttitle" className="form-control" id="exampleInputproducttitle" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">totalstock</label>
                        <input type="number" value={inpval.totalstock} onChange={setdata} name="totalstock" className="form-control" id="exampleInputtotalstock" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">costperitem</label>
                        <input type="number" value={inpval.costperitem} onChange={setdata} name="costperitem" className="form-control" id="exampleInputcostperitem" />
                    </div>
                
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label  className="form-label">Description</label>
                        <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="exampleInputdesc" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;
