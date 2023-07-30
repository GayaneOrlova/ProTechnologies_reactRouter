import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { Project } from "../../store/slices/projectSlice";
import { getDetailCard } from '../../api/project.api';
import { DetailPageStyled } from './DetailPage.styled';
import {Row, Col } from 'antd';
import Card  from 'antd/es/card/Card';

const IMAGE_SRC = "https://www.it-world.ru/upload/iblock/3f6/6c5bvtxl1zu15ocotsmcsk1e6k2xi6ew/shutterstock_1033853617.jpg";

type Props = {

};

type QuizParams = {
  id: string;
};

const DetailCard: React.FC<Props> = () => {
  const [projectDetail, setProjectDetail] = useState<Project>();
  let { id } = useParams<QuizParams>();

  const fetchDetailCard = async () => {
    try {
      if (!id) return;
      const response = await getDetailCard(id);
      setProjectDetail(response.data);
      
    } catch (er) {
      console.log(er);
    }
  }
  
   useEffect(() => {
      fetchDetailCard();
    }, [])

    if (!projectDetail) {return null}
    
    return (
    <DetailPageStyled>
      <Card
        title={projectDetail.title}
        className="card"
        cover={
          <img
            className="card__image"
            src={IMAGE_SRC}
            alt="ReactRedux"
          />}> 
        <Row className="card__table" gutter={[16, 24]}>
          <Col className="card__table-row" span={6}>
            Author:
          </Col>
          <Col className="card__table-column" span={14}>
            {projectDetail.author}
          </Col>
          <Col className="card__table-row" span={6}>
            Technologies:
          </Col>
          <Col className="card__table-column" span={14}>
            {projectDetail.technologies}
          </Col>
          <Col className="card__table-row" span={6}>
            Description: 
          </Col>
          <Col className="card__table-column" span={14}>
            {projectDetail.body}
          </Col>
        </Row>
      </Card>
    </DetailPageStyled>
  )
}

export { DetailCard };
