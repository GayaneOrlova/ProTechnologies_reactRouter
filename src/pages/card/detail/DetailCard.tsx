import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { Project } from "../../../store/projectSlice";
import {Typography, Row, Col } from 'antd';
import { getDetailCard } from '../../../api/project.api';
import Card  from 'antd/es/card/Card';

const { Text } = Typography;

const IMAGE_SRC = "https://www.it-world.ru/upload/iblock/3f6/6c5bvtxl1zu15ocotsmcsk1e6k2xi6ew/shutterstock_1033853617.jpg";
const style: React.CSSProperties = {padding: '8px 0', border:"1px solid darkcyan", borderRadius:"5px" };

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
    console.log('projectDetail:',projectDetail);

    if (!projectDetail) {return null}
    
    return (
    <>
      <Card title={projectDetail.title} style={{ width: 500, margin: "30px auto", textAlign: 'center', fontSize: "24px", border: "2px solid darkcyan" }}
        cover={<img src={IMAGE_SRC} alt="ReactRedux" style={{ width: "50%", margin: "0 auto" }} />}> 
        <Row gutter={[16, 24]} style={{ alignItems: "center", marginLeft: "8px" }}>
          <Col className="gutter-row" span={6}>
            <div style={{ border: "none", textAlign: 'right', fontWeight: 700 }}>Author: </div>
          </Col>
          <Col className="gutter-row" span={16}>
            <div style={style}>{projectDetail.author}</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ border: "none", textAlign: 'right' }}>Technologies: </div>
          </Col>
          <Col className="gutter-row" span={16}>
            <div style={style}>{projectDetail.technologies}</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ border: "none", textAlign: 'right' }}>Description: </div>
          </Col>
          <Col className="gutter-row" span={16}>
            <div style={style}>{projectDetail.body}</div>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export { DetailCard };
