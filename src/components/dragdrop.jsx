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