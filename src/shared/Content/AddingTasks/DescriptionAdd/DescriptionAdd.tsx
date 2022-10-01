import React from 'react';
import './descriptionadd.css';
import {IconCircle} from "../../../../icons/IconCircle";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";

export function DescriptionAdd() {
    const descriptionAdd: any = useSelector<RootState>(state => state.descriptionAdd)

    return (
        <div className='description-add-container'>
            <div className='description-add-header'>Ура! Теперь можно начать работать:</div>
            {
                descriptionAdd.map(({id, title}: any) => <div key={id} className='description-add-item'><IconCircle/>
                    <span>{title}</span></div>)
            }
        </div>
    );
}
