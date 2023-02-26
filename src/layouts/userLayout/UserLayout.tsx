import React from "react";
import styles from "./UserLayout.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Button } from "antd";
const { Header, Footer, Content } = Layout;

interface PropsTypes {
  children: React.ReactNode;
}

export const UserLayout: React.FC<PropsTypes> = (props) => {
  const zhMenu = {label: '中文', key: 'zh'}
  const enMenu = {label: '中文', key: 'zh'}
  const items = [zhMenu, enMenu]
  const menu = <Menu selectedKeys={[]} items={items}></Menu>

  return (
    <Layout className={styles["user-layout-container"]}>
      <Header className={styles["header"]}>
        <div className={styles["lang"]}>
          <Dropdown overlay={menu}>
            <Button>
              {" "}
              选择语言 <CaretDownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
      <Content className={styles["content"]}>
        <div className={styles["top"]}>
          <div className={styles["content-header"]}>
            <Link to="/">
              <img alt="logo" className={styles["logo"]} src={logo} />
              <span className={styles["title"]}>React 旅游网</span>
            </Link>
          </div>
          <div className={styles["desc"]}>
            欢迎来到React旅游网! 希望你玩的开心~
          </div>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>版权所有, 盗版必究</Footer>
    </Layout>
  );
};