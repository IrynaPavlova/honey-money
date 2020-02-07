import React from 'react';
import css from "../modalDashboardTable/modalDashboardTable.module.css"
import ModalBackDrop from '../../modalBackDrop/ModalBackDrop';


const modalDashboardTable = ({changeModal}) => (
    <div className={css.modalWindow}>
    <h3 className={css.title}>Вы уверены?</h3>
    <button className={css.btn} type='button'>Да</button>
    <button onClick={changeModal} className={css.btn} type='button'>Нет</button>
    </div>
);

export default ModalBackDrop(modalDashboardTable);