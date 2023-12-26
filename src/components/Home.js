import React from 'react';
import bannerImg from "../images/banner.webp";
import {Grid} from "@mui/material";

function Home() {
    return (
        <>
            <section>
                <div className={"page-content"}>
                    <div className={"overlay"}/>
                    <div className={"banner-section"}>
                        <h1 className={"linear"}>Empowering Your Digital Transformation Journey.</h1>
                        <h6>Innovative IT Solutions for Today and Tomorrow.</h6>
                        <button className={"theme-btn p-2 p-lg-3"}>Explore Our Services</button>
                        <br/>
                        <img className={"img-fluid"} src={bannerImg}/>
                    </div>
                </div>
            </section>

            <section className={"number-info-section"}>
                <Grid container spacing={2}>
                    <Grid item xs={6} lg={3}>
                        <div className={""}>
                            <h5>150+</h5>
                            <h6>Clients</h6>
                        </div>
                    </Grid>

                    <Grid item xs={6} lg={3}>
                        <div className={""}>
                            <h5>150+</h5>
                            <h6>Clients</h6>
                        </div>
                    </Grid>

                    <Grid item xs={6} lg={3}>
                        <div className={""}>
                            <h5>150+</h5>
                            <h6>Clients</h6>
                        </div>
                    </Grid>

                    <Grid item xs={6} lg={3}>
                        <div className={""}>
                            <h5>150+</h5>
                            <h6>Clients</h6>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </>
    );
}

export default Home;
