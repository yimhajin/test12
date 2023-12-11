import { useState } from "react";
import List from "./List";
import NoList from "./NoList";
import { list } from "./Test";
import Modal from "./Modal";

export default function Contents() {
  let [item, setItem] = useState(list);
  let [isActive, setIsActive] = useState(false); //useState를 사용하는 경우는 내용이 업데이트 되는 경우
  let [titleNum, setTitleNum] = useState();
  let [inputText, setInputText] = useState("");

  let toggleModal = () => {
    setIsActive(!isActive);
  };

  let openModal = (i) => {
    setIsActive(true);
    setTitleNum(i);
  };
  let closeModal = () => {
    setIsActive(false);
  };
  let addItem = () => {
    let copy = [...item];
    copy.unshift(inputText);
    setItem(copy);
    setInputText("");
  };
  let delItem = (i) => {
    let copy = [...item];
    copy.splice(i, 1);
    setItem(copy);
  };
  // let item = [1,2,3,4] // useState에서 받아온 초기 데이터 값
  // let setItem = ()=>{} // item 정보의 수정을 도와주는 변경함수

  return (
    <div className='main'>
      <div className='inputBox'>
        <input
          value={inputText}
          type='text'
          placeholder='가고싶은 여행지를 입력하세요'
          onChange={(e) => {
            setInputText(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button onClick={addItem}>add</button>
      </div>
      {/* <button onClick={toggleModal}>모달 열기</button> */}
      <p className='count'>
        <span>total</span>
        <strong>{item.length}</strong>
      </p>

      {item.length === 0 ? (
        <NoList />
      ) : (
        <ul className='listCon'>
          {item.map((list, i) => {
            return (
              <List
                list={list}
                i={i}
                closeModal={closeModal}
                openModal={openModal}
                key={i}
                delItem={delItem}
              />
            );
          })}
        </ul>
      )}
      {isActive && (
        <Modal item={item} titleNum={titleNum} closeModal={closeModal} />
      )}
    </div>
  );
}
