import React, {useState} from 'react'

function createProduct() {
const [image,setImagaes]=useState([])
const [preImage,setPreimage]=useState([])
const [name,setName]=useState("")
const [description,setDescription]=useState("")
const [category,setCategory]=useState("")
const [tags,setTags]=useState("")
const [price,setPrice]=useState("")
const [stock,setStock]=useState("")
const [emailsetEmail]=useState("")

const categoriesData =[
    {
        title:"Electronics"
    },
    {
        title:"Fashion"
    },
    {
        title:"Books"
    },
    {
        title:"Home Appliances"
    },

]

return(
    <div>
        <h5>Create Product</h5>
        <form>
            <div>
                <label>
                    Email
                </label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email' required/>
            </div>
            <div>
                <label>
                    Name
                </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter product name' required/>
            </div>
            <div>
                <label>
                    Description
                </label>
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Enter product Description' rows="5" required></textarea>
            </div>
            <div>
                <label>Category</label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)} required>
                <option>Select an option</option>
                {categoriesData.map((item,ind)=>(
                     <option value={item.title} key={ind}>{item.title}</option>
                ))}
               </select>
            </div>
            <div>
                <label>Tags</label>
                <input type="text" value={tags} onChange={(e)=>setTags(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} required />
            </div>
            <div>
                <label>Stock</label>
                <input type="number" value={stock} onChange={(e)=>setStock(e.target.value)} required />
            </div>
            <div>
                <label className="pb-1 block">Upload Iamges</label>
                <input type='file' id='upload' onChange={handleImage} required multiple accept='jpg .png .jpeg' />
            </div>
            {preImage.map((img,index)=>(
                <img src={img} key={index} alt="Preview" className="w-[100px/ h-[100px] objext-cover m-2"/>
            ))}
        </form>
    </div>
)
}

export default createProduct
