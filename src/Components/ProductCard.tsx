import React from "react";
import { Link } from "react-router-dom";
import { EditOutlined } from '@ant-design/icons';
import { Card, Grid, Space } from 'antd';
import { Project } from "../Store/projectSlice";
import Column from "antd/es/table/Column";

const { Meta } = Card;

type Props = {
  id?: string,
  project: Project;
  technologies?: string;
  title?: string;
};

const ProductCard: React.FC<Props> = (props) => {

  return (
    <>
      <Link to={`project/${props.project.id}`}>
        <Space direction="vertical" size={12}>
          <Card title={`Project card № ${props.project.id}`} style={{ width: 320, marginTop: 20, border: "2px solid darkcyan"}}>
            <Card
              cover={<img src="https://www.it-world.ru/upload/iblock/3f6/6c5bvtxl1zu15ocotsmcsk1e6k2xi6ew/shutterstock_1033853617.jpg" alt="ReactRedux" />}
              type="inner"
              title="Project name:"
              extra={<p>{props.project.title}</p>}
            >
              <p>Technologies: {(props.project.technologies).join(", ")}</p>
            </Card>
          </Card>
        </Space>
    </Link>
    </>
  )
}

export { ProductCard };