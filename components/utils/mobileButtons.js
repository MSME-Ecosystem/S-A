import Image from 'next/image';
import React, { useState } from 'react'
import axios from 'axios';
const file = "/assets/img/client-11.png"

export const Mobile = ({ res, role_id,setInfo, BASE_URL}) => {
    console.log(res)
    console.log(role_id)
    console.log(res[0].Verified )
   
    const [Resp, setResp] = useState([]);
    const _id = res[0].verify_code1;
   
    const do_AdminConfirm = async (_id)=>{
        console.log(`"Admin "${_id}`)
        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
       const resp=  await axios.get(BASE_URL+'/api.php',{
        params: {
            regid: 'doAdminMobileConfirm', 
            _id:_id 
        }
        },customConfig)
        console.log(resp)
        
         setResp(resp.data)

         setInfo(resp.data) 

    }
    


    
    const do_ClusterConfirm = async (_id)=>{
        console.log(`"Cluster "${_id}`)
        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
       const resp=  await axios.get(BASE_URL+'/api.php',{
        params: {
            regid: 'doClusterValidateMobile', 
            _id:_id 
        }
        },customConfig)
        console.log(resp)
        
         setResp(resp.data)

         setInfo(resp.data) 

    }
 
    const do_GroupConfirm = async (_id)=>{
        console.log(`"Cluster "${_id}`)
        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
       const resp=  await axios.get(BASE_URL+'/api.php',{
        params: {
            regid: 'doGroupValidateMobile', 
            _id:_id 
        }
        },customConfig)
        console.log(resp)
        
         setResp(resp.data)

         setInfo(resp.data) 

    }
    
 
 
    const do_AreaConfirm = async (_id)=>{
        console.log(`"Area "${_id}`)
        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
       const resp=  await axios.get(BASE_URL+'/api.php',{
        params: {
            regid: 'doAreaValidateMobile', 
            _id:_id 
        }
        },customConfig)
        console.log(resp)
        
         setResp(resp.data)

         setInfo(resp.data) 

    }
    
 

return (
        <div>
            {
             
                role_id == '601' ? (
                    Resp.status =='200' ? (
                        <input id="alert-success" className="btn btn-outline-success btn-icon m-1 float-right" name="submit" type="submit" data-toggle="modal" data-target=".bd-example-modal-sm" value="Re-Send Email" />
                       
                    ):(
                        res[0].Verified == 'No' ? (
                            res[0]['clusterMRC_confirm_status'] == "1" ?
                            <input type='button' id='alert-success' onClick={() =>do_AdminConfirm(_id)} value='Confirm'  className='btn btn-outline-danger btn-icon m-1 float-right' name='submit' data-toggle='modal' data-target='.bd-example-modal-sm' />
                            : <input id="alert-success" className="btn btn-outline-success btn-icon m-1 float-right" name="submit" type="button" data-toggle="modal" data-target=".bd-example-modal-sm" value="Waiting for Manager to Validate the Application" />
 
                        ) : (
                            <input id="alert-success" className="btn btn-outline-success btn-icon m-1 float-right" name="submit" type="submit" data-toggle="modal" data-target=".bd-example-modal-sm" value="Re-Send Email" />
                        ) 
                           
                    )
                    
                ) : (
                    role_id =='631' ? (

                        Resp.status =='200' ? (
                            <input id="alert-success" className="btn btn-outline-success btn-icon m-1 float-right" name="submit" type="submit" data-toggle="modal" data-target=".bd-example-modal-sm" value="Validated" />
                           
                        ):(
                            res[0]['clusterMRC_confirm_status'] == "0" && res[0]['groupMRC_confirm_status'] == "1" ?
                            <input type='button' id='alert-success' onClick={() =>do_ClusterConfirm(_id)} value='Confirm'  className='btn btn-outline-danger btn-icon m-1 float-right' name='submit' data-toggle='modal' data-target='.bd-example-modal-sm' />
                            : <input id="alert-success" className="btn btn-outline-success btn-icon m-1 float-right" name="submit" type="button" data-toggle="modal" data-target=".bd-example-modal-sm" value="Waiting for Manager to Validate the Application" />
                        )
                        
                    ) : (
                        role_id =='632' ? (

                            Resp.status =='200' ? (
                                <input id="alert-success" className="btn btn-outline-success btn-icon m-1 float-right" name="submit" type="submit" data-toggle="modal" data-target=".bd-example-modal-sm" value="Validated" />
                               
                            ):(
                                res[0]['groupMRC_confirm_status'] == "0" && res[0]['areaMRC_confirm_status'] == "1" ?
                                <input type='button' id='alert-success' onClick={() =>do_GroupConfirm(_id)} value='Confirm'  className='btn btn-outline-danger btn-icon m-1 float-right' name='submit' data-toggle='modal' data-target='.bd-example-modal-sm' />
                                : <input id="alert-success" className="btn btn-outline-success btn-icon m-1 float-right" name="submit" type="button" data-toggle="modal" data-target=".bd-example-modal-sm" value="Waiting for Manager to Validate the Application" />
                            )
                            
                        ) : (
                            role_id =='633' ? (

                                Resp.status =='200' ? (
                                    <input id="alert-success" className="btn btn-outline-success btn-icon m-1 float-right" name="submit" type="submit" data-toggle="modal" data-target=".bd-example-modal-sm" value="Validated" />
                                   
                                ):(
                                    res[0]['areaMRC_confirm_status'] == "0" ?
                                    <input type='button' id='alert-success' onClick={() =>do_AreaConfirm(_id)} value='Confirm'  className='btn btn-outline-danger btn-icon m-1 float-right' name='submit' data-toggle='modal' data-target='.bd-example-modal-sm' />
                                    : <input id="alert-success" className="btn btn-outline-success btn-icon m-1 float-right" name="submit" type="button" data-toggle="modal" data-target=".bd-example-modal-sm" value="Validated" />
        
        
                                )
                                
                            ) : (
                                ""
                            ) 
                        ) 
                    ) 
                )
           
            
            }
        </div>
    )
}

