import React from 'react'
import './experiance.css'
import {
    makeStyles,
    shorthands,
    Tab,
    TabList,
} from "@fluentui/react-components";
const useStyles = makeStyles({
    root: {
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        rowGap: "20px",
        height: "100%"
    },

});


function Experience() {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <TabList className='experience-tab' defaultSelectedValue="tab1" vertical >
                <Tab value="tab1">Hloov</Tab>
            </TabList>
            <div className='TabContent'>
                <p className='exp-Type'>Software Developer&nbsp;<span>@&nbsp;Hloov</span></p>
                <p className='exp-Time'>Dec 2021 &nbsp;-&nbsp; Present</p>
                <p className='exp-Desc'>
                    <ul>
                        <li>Developing and implementing highly responsive user interface components and workflows using react concepts and Redux.</li>
                        <li>Integration of various modules and ingestion of data in various forms into react components using Rest APIs.&nbsp;(ex:- 3D models, charts, etc.)</li>

                    </ul>
                </p>
                <div className='exp-skills'>

                </div>
            </div>
        </div>)
}

export default Experience