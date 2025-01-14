import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './dragdrop.css';
import Button from "@material-ui/core/Button";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([],{preview:"" ,type:"",raw:''});

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    // const onFileDrop = (e) => {
    //     const newFile = e.target.files[0];
    //     if (newFile) {
    //         const updatedList = [...fileList, newFile];
    //         setFileList(updatedList);
    //         props.onFileChange(updatedList);
    //     }
    // }

    // const fileRemove = (file) => {
    //     const updatedList = [...fileList];
    //     updatedList.splice(fileList.indexOf(file), 1);
    //     setFileList(updatedList);
    //     props.onFileChange(updatedList);
    // }
    // const handleFileChange = (e) => {
    //     if (e.target.files.length > 0) {
    //         setFileName(e.target.files[0].name);
    //     }
    // };
    const handleChange = e => {
        
        const file = e.target.files[0];
        if (file) {
            const fileType = file.name.endsWith(".jpg")|| file.name.endsWith(".jpeg")  ||file.name.endsWith(".png") ? 'image' : 'video';
            setFileList({
            preview: URL.createObjectURL(e.target.files[0]),
            type: fileType,
            raw: e.target.files[0]
          });
          if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
        
      };
    }
    //   const handleUpload = async e => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("fileList", fileList.raw);
    
    //     await fetch("YOUR_URL", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "multipart/form-data"
    //       },
    //       body: formData
    //     });
    //   };

    return (
        <>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img src={"https://media.geeksforgeeks.org/wp-content/uploads/20240308113922/Drag-.png"}
                        alt="" />
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" accept='image/*,video/*' value="" onChange={handleChange} />
            </div>
            <input
                type="file"
                accept="image/*,video/*"
                style={{ display: "none" }}
                id="contained-button-file"
                onChange={handleChange}
            />
            <label htmlFor="contained-button-file" className='flex justify-center'>
                <Button variant="contained" color="primary" component="span">
                    Select file
                </Button>
            </label>
            
                  {/* {fileList && (
                         <div style={{ marginTop: 20 }}>
                            <p>Selected File: {fileList}</p>
                         </div>
                    )} */}
                {/* {
                    fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    {/* <img src={ImageConfig[item.type.split('/')[1]] ||
                                        ImageConfig['default']} alt="" /> */}
                                        {/* <img src={"Latest_school_college_fee_receipt_11017527_62179728RAKBNQ.jpg"}/>
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del"
                                        onClick={() => fileRemove(item)}>
                                        <div className='w-28 h-7 bg-red-600  rounded-md mr-4 '><h3 className='text-white font-medium pl-2 pr-2'> Delete </h3></div>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            } */}
        <label>
            { 
                fileList.preview ? (
                fileList.type === 'image' ? (
                    <ImgComparisonSlider className='h-96 w-96 flex justify-center'>
                                <img
                                    slot='first'
                                    src={fileList.preview}
                                    alt="Preview"
                                />
                            <img
                                slot='second'
                                src={fileList.preview}
                                alt="Preview"
                                style={{
                                    filter: "grayscale(100%)",
                                    WebkitFilter: "grayscale(100%)",
                            }}
                            />
                    </ImgComparisonSlider>
                ) : ( 
                <div className='flex justify-center m-10' >
                <div slot='first' className='w-96 h-96'>
                    <Player width="100%" height="100%" src={fileList.preview}/>
                </div>
                 <div slot='second'
                    style={{
                        filter: "grayscale(100%)",
                        WebkitFilter: "grayscale(100%)",
                      }}
                className='w-96 h-96'>
                    <Player width="100%" height="100%" src={fileList.preview}/>
                </div>
               
               </div>   
          )
        ) : (
          <h1>Please Upload Your Image or Video</h1>
        )}
      </label>

  );
        </>
    );
}

DropFileInput.propTypes = {
    handleChange: PropTypes.func,
    handleUpload: PropTypes.func
}

export default DropFileInput;