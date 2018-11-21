import React, { Component } from 'react'
import LoaderImage from   './audio.svg';
import styles from './index.css';
import SVG from 'react-inlinesvg';
import { css } from 'glamor';
import { Facebook } from 'react-content-loader'
import ContentLoader from "react-content-loader"
export default class Spinner extends Component {
  render() {
    return (

             <div className={rules}>
                      <Facebook />

             </div>           
    )
  }
}
const rules = css({
    
  });
  