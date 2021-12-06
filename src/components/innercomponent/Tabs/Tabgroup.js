import React, {useState, useEffect} from "react";
import Tabitem from "./Tabitem";
import styles from '../../../css/tabs.module.css';

const Tabgroup = (props) => {

    const { children } = props;
    const [tabHeader, setTabHeader] = useState([]);
    const [childContent, setChildConent] = useState({});
    const [active, setActive] = useState("");
    //const [childImage, setChildImg] = useState({});
    const [activeImg, setImage] = useState({});
    useEffect(() => {
        const headers = [];
        const images = [];
        const childCnt = {};
        const imagesContent = {};
        React.Children.forEach(children, (element) => {
            if (!React.isValidElement(element)) return;
            //const { name } = element.props;
            headers.push(element.props.name);
            images.push(element.props.image);
            childCnt[element.props.name] = element.props.children;
            imagesContent[element.props.name] = element.props.image;
        });

        setTabHeader(headers);
        setActive(headers[0]);
        setChildConent({ ...childCnt });

        //setChildImg(images);
        setImage({ ...imagesContent });

    }, [props, children]);

    //console.log(tabHeader);
    const changeTab = (name) => {
        setActive(name);
    };
    
    var tab_width = 100 / tabHeader.length;
    const tabStyle = {
        width: tab_width+'%',
    };
    //console.log(activeImg);

    return (

        <>
            <div className={styles.tabRow}>
                <div className={styles.tabCol}>
                    <div className={styles.tabs}>
                        <ul className={styles.tabHeader}>
                            {tabHeader.map( (item, index) => (
                                <li
                                    onClick={() => changeTab(item)}
                                    key={index}
                                    className={item === active ? styles.active : ""}
                                    style={tabStyle}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.tabContent}>
                            {Object.keys(childContent).map((key) => {
                            if (key === active) {
                                return <div key={key} className={styles.tabChild}>
                                            <div>
                                                {childContent[key]}
                                            </div>
                                            {/* <button src=''>Learn More</button> */}
                                        </div>;
                            } else {
                                return null;
                            }
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.tabCol}>
                    {Object.keys(activeImg).map((key) => (
                       // if (key === active) {
                            <div className={key === active ? styles.tabImage + ' ' + styles.active : styles.tabImage} key={key}>
                                <img src={activeImg[key]} key={key}/>
                            </div>
                       // }
                       
                    ))}
                </div>               
            </div>
        </>

    );
};

Tabgroup.propTypes = {
    children: function (props, propName, componentName) {
      const prop = props[propName];
  
      let error = null;
      React.Children.forEach(prop, function (child) {
        if (child.type !== Tabitem) {
          error = new Error(
            "`" + componentName + "` children should be of type `TabPane`."
          );
        }
      });
      return error;
    }
  };

export default Tabgroup;