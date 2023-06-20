/* import React ,{useState}from 'react';
import  './style.css';
import {Link,useParams} from 'react-router-dom';
import { HouseDoor,PencilSquare, Images,ChevronExpand} from 'react-bootstrap-icons';
function Sidebar() {

 /* const [showContent, setShowContent] = useState(false);
  const [showMedia, setShowMedia]=useState(false);
  
  const handleContentClick = () => {
    setShowContent(!showContent);
  };
  const handleMediaClick=()=>{
    setShowMedia(!showMedia);
  }onClick={() => handleMenuClick(index)}*/

/*const [item,setItem]=useState([{
  id: 1,
  path:"/home",
  title: "Home",
  icon:  <HouseDoor size={32} color="blue" />,
},
{
  id: 2,
  path:"/content",
  title: "Content",
  icon:  <PencilSquare size={32} color="blue" />,
  arrow: <ChevronExpand size={24} color="black"/>,
  selected:false,
  children:[
    {
      id:3,
      path:'/submenu',
      title:'Submenu',
    }
  ]
},
{
  id: 4,
  path:"/media",
  title: "Media",
  icon:  <Images size={32} color="blue" />,
  arrow:  <ChevronExpand size={24} color="black"/>,
  selected: false,
  children:[
    {
      id:5,
      path:'/submenu',
      title:'Submenu',
    }
  ]
}])
const call=()=>{
  const updatedItems = item.map((menuItem) => {
    return {
      ...menuItem,
      selected: true,
    };
  });
  setItem(updatedItems);
  }
  

const { id } = useParams();

  return (
    <div className="sidebar">
      
    <ul>
    {item.map((menuItem, index) =>(
        <li key={menuItem.id} className="list-item"   >

          <div to={menuItem.path} className='link'>
            {menuItem.icon}
            <span className='text'>{menuItem.title}</span>
            {menuItem.arrow}
          </div>
        
        <ul className='sub-menu'>

        </ul>

        </li>
      ))}
    </ul>
  </div>
   /* <div className="sidebar">
      <ul>

        <li  className='list-item-home'>
          <Link to="/Home" className='link'>
          <HouseDoor size={32} color="blue" />
          <span className='text'>Home</span>
          </Link>
        </li>

        <li className='list-item' onClick={handleContentClick}>
          <PencilSquare size={32} color="blue" />
          <span className='text'>Content</span>
          <ChevronExpand size={24} color="black"/>
        </li>

        {showContent && (
          <ul className="sub-menu">
            <li>
              <span>Submenu 1</span>
            </li>
            <li>
              <span>Submenu 2</span>
            </li>
            <li>
              <span>Submenu 3</span>
            </li>
          </ul>
        )}

        <li className='list-item' onClick={handleMediaClick}>
          <Images size={32} color="blue" />
          <span className='text'>Media</span>
          <ChevronExpand size={24} />
        </li>

        {showMedia && (
          <ul className="sub-menu">
            <li>
              <span>Submenu 1</span>
            </li>
            <li>
              <span>Submenu 2</span>
            </li>
            <li>
              <span>Submenu 3</span>
            </li>
          </ul>
        )}
        
      </ul>
    </div>*/
/*);
}

export default Sidebar;
*/
import React, { useState } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import {
  FileEarmarkRichtextFill,
  ImageFill,
  ChevronDoubleDown,
  HouseDoorFill,
} from "react-bootstrap-icons";

function Sidebar() {
  const [items, setItems] = useState([
    {
      id: 0,
      path: "/home",
      title: "Home",
      icon: <HouseDoorFill size={24} color="rgba(105, 155, 247, 1)" />,

      selected: false,
      children: [],
    },
    {
      id: 2,
      path: "/content",
      title: "Content",
      icon: (
        <FileEarmarkRichtextFill size={24} color="rgba(105, 155, 247, 1)" />
      ),
      arrow: <ChevronDoubleDown className="arrow" size={14} />,

      selected: false,
      children: [
        {
          id: 21,
          path: "/content/view",
          title: "View All",
        },
        {
          id: 22,
          path: "/content/add",
          title: "Add New",
        },
      ],
    },
    {
      id: 4,
      path: "/media",
      title: "Media",
      icon: <ImageFill size={22} color="rgba(105, 155, 247, 1)" />,
      arrow: <ChevronDoubleDown size={14} className="arrow" />,

      selected: false,
      children: [
        {
          id: 41,
          path: "/media/view",
          title: "View All",
        },
        {
          id: 42,
          path: "/media/add",
          title: "Add New",
        },
        {id:43,
        path:"/media/add/abc",
        title:"Gallery"}
      ],
    },
  ]);

  const { path } = useParams();

  const handleItemClick = (index) => {
    const newItems = [...items];
    newItems[index].selected = !newItems[index].selected;
    setItems(newItems);
  };

  function handleChildClick(event) {
    const links = document.querySelectorAll(".child-link");

    links.forEach((link) => {
      link.classList.remove("active");
    });

    event.target.classList.add("active");
  }

  return (
    <div className="sidebar">
      <ul>
        {items.map((menuItem, index) => (
          <li key={menuItem.id} className="list-item">
            {menuItem.id === 0 ? (
              <Link
                to={menuItem.path}
                className={`link ${menuItem.path === path ? "active" : ""} `}
                onClick={() => handleItemClick(index)}
              >
                {menuItem.icon}
                <span className="text">{menuItem.title}</span>
                {menuItem.arrow}
              </Link>
            ) : (
              <div
                className={`link ${menuItem.path === path ? "active" : ""} `}
                onClick={() => handleItemClick(index)}
              >
                {menuItem.icon}
                <span className="text">{menuItem.title}</span>
                {menuItem.arrow}
              </div>
            )}
            {menuItem.selected && (
              <ul className="sub-menu">
                {menuItem.children.map((child) => (
                  <li className="child-submenu" key={child.id}>
                    <Link
                      className="child-link"
                      to={child.path}
                      onClick={handleChildClick}
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
/*<li key={menuItem.id} className="list-item">
{menuItem.path === '/home' ? (
  <Link
    to={menuItem.path}*/
