import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useHistory } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'


const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const {updata, setUPdata} = useContext(updatedata)

    const history = useHistory("");

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


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`https://crudappreactjs.herokuapp.com/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {name, producttype, producttitle, totalstock, costperitem, desc } = inpval;

        const res2 = await fetch(`https://crudappreactjs.herokuapp.com/updateuser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name, producttype, producttitle, totalstock, costperitem, desc 
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            history.push("/")
            setUPdata(data2);
        }

    }

    return (
        <div className="container">
            <NavLink to="/">home2</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputproducttype1" className="form-label">Product Code</label>
                        <input type="number" value={inpval.name} onChange={setdata} name="name" className="form-control" id="exampleInputname"  />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">producttype</label>
                        <input type="text" value={inpval.producttype} onChange={setdata} name="producttype" className="form-control" id="exampleInputproductype" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">productitle</label>
                        <input type="text" value={inpval.productitle} onChange={setdata} name="productitle" className="form-control" id="exampleInputproducttitle" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">totalstock</label>
                        <input type="number" value={inpval.totalstock} onChange={setdata} name="totalstock" className="form-control" id="exampleInputtotalstock" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">costperitem</label>
                        <input type="number" value={inpval.costperitem} onChange={setdata} name="costperitem" className="form-control" id="exampleInputcostperitem" />
                    </div>
                   
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label className="form-label">Description</label>
                        <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="exampleInputdesc" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;





