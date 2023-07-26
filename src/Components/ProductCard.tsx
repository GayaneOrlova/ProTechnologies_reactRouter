import React from "react";
import { Link } from "react-router-dom";
import { Card, Space } from 'antd';
import { Project } from "../Store/projectSlice";
import { AppRoutes } from "../utils/router/constants";

const { Meta } = Card;

type Props = {
  id?: string,
  project: Project;
  technologies?: string;
  title?: string;
};

const IMAGE_SRC = "https://www.it-world.ru/upload/iblock/3f6/6c5bvtxl1zu15ocotsmcsk1e6k2xi6ew/shutterstock_1033853617.jpg";

const ProductCard: React.FC<Props> = (props) => {

  return (
    <>
      <Link to={AppRoutes.getDetailsRoute(props.project.id)}>
        <Space direction="vertical" size={12}>
          <Card
            title={`Project card № ${props.project.id}`}
            style={{ width: 320, marginTop: 20, border: "2px solid darkcyan" }}
          >
            <Card
              cover={<img src={IMAGE_SRC} alt="ReactRedux" />}
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