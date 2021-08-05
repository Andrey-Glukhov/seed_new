<?php
/**
*Template Name: Home
*/
 get_header(); ?>

<div class="scroll-wraper">
    <div class="scroll-canvas">
        <div class="seed-opener">
            <img src="http://localhost:8888/seed/wordpress/wp-content/uploads/2021/08/logo_big_transparent-01.png"/>
            <div class="slogan-wrapper"> 
                <h2>SPECIALIZING ON THE GROWTH OF BRAND CULTURES</h2>
            </div>
        </div>

        <?php $home = new WP_Query( array( 'page_id' => 12 ) );
        if ( $home->have_posts() ) : while ( $home->have_posts() ) : $home->the_post();
        ?>

        <div class="seed-gate">
            <div class="gate-wrapper">
                    <svg id="Camada_2" data-name="Camada 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1789.02 1024.99">
                        <defs>
                            <style>
                            .cls-1 {
                                fill: #d15b40;
                            }

                            .cls-2, .cls-5, .cls-7 {
                                fill: none;
                                stroke-miterlimit: 10;
                                stroke-width: 2px;
                            }

                            .cls-2 {
                                stroke: #0a6149;
                            }

                            .cls-3 {
                                fill: #0a6149;
                            }

                            .cls-4 {
                                fill: #bbcfc0;
                            }

                            .cls-5 {
                                stroke: #bbcfc0;
                            }

                            .cls-6 {
                                fill: #ce6149;
                            }

                            .cls-7 {
                                stroke: #d15b40;
                            }
                            </style>
                        </defs>
                        <g id="gate_left" transform="matrix(1,0,0,1,0,0)">
                            <path class="cls-1" d="M425.67,287.59S717.72,37,944.87,76.34v985H425.67V287.59" transform="translate(-75.54 -36.35)"/>
                            <path class="cls-2" d="M441.33,393.31s283.1-214.13,510.26-194.15V699.91H441.33l1.12-307.2" transform="translate(-75.54 -36.35)"/>
                            <rect class="cls-3" x="378.1" y="696.01" width="59.31" height="139.87"/>
                            <rect class="cls-4" x="775.34" y="890.15" width="59.31" height="104.62"/>
                            <rect class="cls-4" x="695.89" y="903.58" width="59.31" height="104.62"/>
                            <rect class="cls-4" x="610.85" y="896.87" width="59.31" height="104.62"/>
                            <rect class="cls-4" x="542.59" y="893.51" width="59.31" height="104.62"/>
                            <rect class="cls-4" x="465.38" y="903.58" width="59.31" height="104.62"/>
                            <rect class="cls-4" x="371.38" y="892.39" width="59.31" height="104.62"/>
                            <rect class="cls-3" x="455.31" y="696.01" width="59.31" height="139.87"/>
                            <rect class="cls-3" x="534.76" y="696.01" width="59.31" height="139.87"/>
                            <rect class="cls-3" x="613.08" y="696.01" width="59.31" height="139.87"/>
                            <rect class="cls-3" x="691.41" y="696.01" width="59.31" height="139.87"/>
                            <rect class="cls-3" x="767.5" y="696.01" width="59.31" height="139.87"/>
                            <line class="cls-5" x1="802.1" y1="660.2" x2="802.1" y2="15.67"/>
                            <line class="cls-5" x1="722.02" y1="660.2" x2="722.02" y2="27.97"/>
                            <line class="cls-5" x1="641.52" y1="661.32" x2="641.52" y2="52.59"/>
                            <line class="cls-5" x1="560.4" y1="660.2" x2="560.4" y2="89.52"/>
                            <line class="cls-5" x1="480.4" y1="661.32" x2="480.4" y2="137.63"/>
                            <line class="cls-5" x1="409.89" y1="662.44" x2="409.89" y2="190.23"/>
                            <circle class="cls-3" cx="802.19" cy="10.07" r="10.07"/>
                            <circle class="cls-3" cx="722.74" cy="24.62" r="10.07"/>
                            <circle class="cls-3" cx="641.06" cy="49.24" r="10.07"/>
                            <circle class="cls-3" cx="560.49" cy="86.16" r="10.07"/>
                            <circle class="cls-3" cx="479.92" cy="132.04" r="10.07"/>
                            <circle class="cls-3" cx="410.55" cy="179.04" r="10.07"/>
                            <rect class="cls-2" x="768.62" y="897.98" width="59.31" height="104.62"/>
                            <rect class="cls-2" x="378.1" y="897.98" width="59.31" height="104.62"/>
                            <rect class="cls-2" x="456.43" y="897.98" width="59.31" height="104.62"/>
                            <rect class="cls-2" x="538.11" y="899.1" width="59.31" height="104.62"/>
                            <rect class="cls-2" x="617.56" y="897.98" width="59.31" height="104.62"/>
                            <rect class="cls-2" x="692.53" y="897.98" width="59.31" height="104.62"/>
                            <path d="M694.18,479.77c0,144.83,117.12,262.3,261.82,262.88V216.89C811.3,217.47,694.18,334.94,694.18,479.77Z" transform="translate(-75.54 -36.35)"/>
                            <path class="cls-5" d="M685.18,464.77c0,144.83,117.12,262.3,261.82,262.88V201.89C802.3,202.47,685.18,319.94,685.18,464.77Z" transform="translate(-75.54 -36.35)"/>
                            <g>
                            <path class="cls-6" d="M836.4,679.68q-11.49,0-19.16-12.51T805.67,629.4q-3.92-25.24-4.52-64.4l21.76-10.92q.3,22.77,1.61,38t4,22.76q2.67,7.5,6.66,7.5c3.27,0,5.49-3,6.67-9.09a111.41,111.41,0,0,0,1.76-20.94q0-23.2-3.76-38.91A249.09,249.09,0,0,0,830,521.78l-12.88-33.22a224.48,224.48,0,0,1-11.26-39.13q-4.38-21.87-4.37-53.71,0-45.5,9-69.85T835,301.52q9.36,0,15.34,9.1T859.62,335a241,241,0,0,1,4.6,33.22q1.31,18,1.61,35.72l-21.61,9.57q-.32-16.85-1-29.59t-2.76-20q-2.07-7.29-6.21-7.28-4.44,0-6.59,9.78A101,101,0,0,0,825.51,388q0,19.57,3,32.09a210.79,210.79,0,0,0,8.19,26.16L849.27,479a303.64,303.64,0,0,1,13.41,45.73q5.61,25.71,5.6,63.49a252.33,252.33,0,0,1-4,46.87q-4,20.92-11.12,32.76T836.4,679.68Z" transform="translate(-75.54 -36.35)"/>
                            <path class="cls-6" d="M879.62,674.68V306.07h54.11V358H904.91V467.72h22.22v19.5H904.91V623.71H934v51Z" transform="translate(-75.54 -36.35)"/>
                            </g>
                        </g>
                        <g id="gate_right" transform="matrix(1,0,0,1,0,0)">
                            <path class="cls-1" d="M1490.94,287.59S1198.88,37,971.73,76.34v985h519.21V287.59" transform="translate(-75.54 -36.35)"/>
                            <path class="cls-2" d="M1501,393.31s-283.1-214.13-510.26-194.15V699.91H1501l-1.12-307.2" transform="translate(-75.54 -36.35)"/>
                            <rect class="cls-3" x="931.99" y="696.01" width="59.31" height="139.87"/>
                            <rect class="cls-3" x="1009.2" y="696.01" width="59.31" height="139.87"/>
                            <rect class="cls-3" x="1088.65" y="696.01" width="59.31" height="139.87"/>
                            <rect class="cls-3" x="1166.98" y="696.01" width="59.31" height="139.87"/>
                            <rect class="cls-3" x="1245.31" y="696.01" width="59.31" height="139.87"/>
                            <rect class="cls-3" x="1321.4" y="696.01" width="59.31" height="139.87"/>
                            <line class="cls-5" x1="976.85" y1="660.2" x2="976.85" y2="15.67"/>
                            <line class="cls-5" x1="1056.93" y1="660.2" x2="1056.93" y2="27.97"/>
                            <line class="cls-5" x1="1137.42" y1="661.32" x2="1137.42" y2="52.59"/>
                            <line class="cls-5" x1="1215.19" y1="660.2" x2="1215.19" y2="89.52"/>
                            <line class="cls-5" x1="1298.54" y1="661.32" x2="1298.54" y2="137.63"/>
                            <line class="cls-5" x1="1369.05" y1="662.44" x2="1369.05" y2="190.23"/>
                            <circle class="cls-3" cx="976.75" cy="10.07" r="10.07"/>
                            <circle class="cls-3" cx="1056.2" cy="24.62" r="10.07"/>
                            <circle class="cls-3" cx="1137.89" cy="49.24" r="10.07"/>
                            <circle class="cls-3" cx="1215.1" cy="86.16" r="10.07"/>
                            <circle class="cls-3" cx="1299.02" cy="132.04" r="10.07"/>
                            <circle class="cls-3" cx="1368.4" cy="179.04" r="10.07"/>
                            <rect class="cls-4" x="1312.45" y="890.15" width="59.31" height="104.62"/>
                            <rect class="cls-4" x="1233" y="903.58" width="59.31" height="104.62"/>
                            <rect class="cls-4" x="1156.91" y="896.87" width="59.31" height="104.62"/>
                            <rect class="cls-4" x="1077.46" y="893.51" width="59.31" height="104.62"/>
                            <rect class="cls-4" x="1000.25" y="904.7" width="59.31" height="104.62"/>
                            <rect class="cls-4" x="919.69" y="894.63" width="59.31" height="104.62"/>
                            <rect class="cls-2" x="925.28" y="899.1" width="59.31" height="104.62"/>
                            <rect class="cls-2" x="1003.61" y="899.1" width="59.31" height="104.62"/>
                            <rect class="cls-2" x="1085.29" y="899.1" width="59.31" height="104.62"/>
                            <rect class="cls-2" x="1164.74" y="899.1" width="59.31" height="104.62"/>
                            <rect class="cls-2" x="1239.71" y="899.1" width="59.31" height="104.62"/>
                            <rect class="cls-2" x="1315.81" y="899.1" width="59.31" height="104.62"/>
                            <path d="M978.08,216.88H977V742.65h1.08C1123.27,742.66,1241,625,1241,479.77S1123.27,216.88,978.08,216.88Z" transform="translate(-75.54 -36.35)"/>
                            <path class="cls-5" d="M970.08,205.88H969V731.65h1.08C1115.27,731.66,1233,614,1233,468.77S1115.27,205.88,970.08,205.88Z" transform="translate(-75.54 -36.35)"/>
                            <g>
                            <path class="cls-6" d="M1000.76,677.68V309.07h54.1V361H1026V470.72h22.23v19.5H1026V626.71h29.13v51Z" transform="translate(-75.54 -36.35)"/>
                            <path class="cls-6" d="M1067.89,677.68V309.07h30.34q15.8,0,24.6,12.06t12.49,37.77q3.69,25.73,3.68,65.76V558.91q0,41-3.68,67.35T1123,665.17q-8.65,12.52-24.13,12.51Zm25.28-52.34h5.37q7,0,10-6.59t3.75-19.57q.76-13,.77-32.09v-152q0-19.12-1-30.73t-4-17.06c-2-3.63-5.24-5.46-9.73-5.46h-5.22Z" transform="translate(-75.54 -36.35)"/>
                            </g>
                        </g>
                        <g>
                            <line class="cls-5" x1="290.82" y1="58.19" x2="290.82" y2="17.9"/>
                            <line class="cls-5" x1="242.7" y1="58.19" x2="242.7" y2="17.9"/>
                            <line class="cls-5" x1="194.58" y1="58.19" x2="194.58" y2="17.9"/>
                            <line class="cls-5" x1="146.47" y1="58.19" x2="146.47" y2="17.9"/>
                            <line class="cls-5" x1="100.59" y1="58.19" x2="100.59" y2="17.9"/>
                            <line class="cls-5" x1="52.47" y1="58.19" x2="52.47" y2="17.9"/>
                            <circle class="cls-3" cx="290.82" cy="11.19" r="10.07"/>
                            <circle class="cls-3" cx="242.7" cy="11.19" r="10.07"/>
                            <circle class="cls-3" cx="194.58" cy="11.19" r="10.07"/>
                            <circle class="cls-3" cx="147.59" cy="11.19" r="10.07"/>
                            <circle class="cls-3" cx="100.59" cy="11.19" r="10.07"/>
                            <circle class="cls-3" cx="51.35" cy="11.19" r="10.07"/>
                            <rect class="cls-3" x="18.9" y="58.19" width="306.6" height="966.8"/>
                            <rect class="cls-7" x="25.62" y="70.5" width="313.32" height="165.61"/>
                            <rect class="cls-7" x="1" y="848.19" width="313.32" height="165.61"/>
                            <rect class="cls-7" x="11.07" y="257.37" width="298.77" height="572.92"/>
                        </g>
                        <g>
                            <rect class="cls-3" x="1462.39" y="58.19" width="306.6" height="966.8"/>
                            <rect class="cls-7" x="1455.68" y="70.5" width="313.32" height="165.61"/>
                            <rect class="cls-7" x="1474.7" y="848.19" width="313.32" height="165.61"/>
                            <rect class="cls-7" x="1447.85" y="257.37" width="298.77" height="572.92"/>
                            <line class="cls-5" x1="1733.19" y1="58.19" x2="1733.19" y2="17.9"/>
                            <line class="cls-5" x1="1685.07" y1="58.19" x2="1685.07" y2="17.9"/>
                            <line class="cls-5" x1="1636.95" y1="58.19" x2="1636.95" y2="17.9"/>
                            <line class="cls-5" x1="1588.84" y1="58.19" x2="1588.84" y2="17.9"/>
                            <line class="cls-5" x1="1542.96" y1="58.19" x2="1542.96" y2="17.9"/>
                            <line class="cls-5" x1="1494.84" y1="58.19" x2="1494.84" y2="17.9"/>
                            <circle class="cls-3" cx="1733.19" cy="11.19" r="10.07"/>
                            <circle class="cls-3" cx="1685.07" cy="11.19" r="10.07"/>
                            <circle class="cls-3" cx="1636.95" cy="11.19" r="10.07"/>
                            <circle class="cls-3" cx="1589.96" cy="11.19" r="10.07"/>
                            <circle class="cls-3" cx="1542.96" cy="11.19" r="10.07"/>
                            <circle class="cls-3" cx="1493.72" cy="11.19" r="10.07"/>
                        </g>
                    </svg>
                    <h2>Hello and welcome to our SEED nursery!</h2>
            </div>
            <div class="gate-text">
                <div class="container-fluid">
                    <div class="row justify-content-end">
                        <div class="col-4 gate-content">
                        <p><?php the_field('intro'); ?></p>
                        </div> <!-- gate-content -->
                    </div> <!-- justify-content-end -->
                </div> <!-- container-fluid -->
            </div>   <!-- gate-text -->
        </div> <!-- seed-gate -->
        <div class="seed-greenhouse">
        <svg id="svg216" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1010 749">
            <defs>
              <style>
                .svg216_cls-1, .svg216_cls-10, .svg216_cls-2, .svg216_cls-6, .svg216_cls-9 {
                  fill: none;
                }
          
                .svg216_cls-1 {
                  stroke: #0a6149;
                }
          
                .svg216_cls-1, .svg216_cls-10, .svg216_cls-2, .svg216_cls-6, .svg216_cls-7 {
                  stroke-miterlimit: 10;
                }
          
                .svg216_cls-2 {
                  stroke: #d15b40;
                }
          
                .svg216_cls-3 {
                  fill: #d3e1cd;
                }
          
                .svg216_cls-4, .svg216_cls-7 {
                  fill: #0a6149;
                }
          
                .svg216_cls-5 {
                  fill: #d15b40;
                }
          
                .svg216_cls-6, .svg216_cls-7 {
                  stroke: #d3e1cd;
                }
          
                .svg216_cls-8 {
                  fill: #fff;
                }
          
                .svg216_cls-10 {
                  stroke: #dde6d4;
                }
              </style>
            </defs>
            <title>seed12_1svg</title>
            <g id="Camada_5" data-name="Camada 5">
              <path id="path6" class="svg216_cls-1" d="M278,566"/>
            </g>
            <g id="flower_top" data-name="flower top">
              <line id="line9" class="svg216_cls-2" x1="715.5" y1="296.5" x2="715.5" y2="119.5"/>
              <path id="path11" class="svg216_cls-3" d="M682.5,289.5s-9,23,11,26C693.5,315.5,707.5,296.5,682.5,289.5Z"/>
              <path id="path13" class="svg216_cls-4" d="M708.15,293s-19.6,15-4,27.94C704.12,321,725.93,312,708.15,293Z"/>
              <path id="path15" class="svg216_cls-3" d="M672.89,300.16s7,23.7,24.61,13.83C697.5,314,697,290.4,672.89,300.16Z"/>
              <path id="path17" class="svg216_cls-3" d="M748.15,284.5s9,23-11,26C737.15,310.5,723.15,291.5,748.15,284.5Z"/>
              <path id="path19" class="svg216_cls-4" d="M730.5,293s19.59,15,4,27.94C734.52,321,712.72,312,730.5,293Z"/>
              <path id="path21" class="svg216_cls-3" d="M717.5,293s19.59,15,4,27.94C721.52,321,699.72,312,717.5,293Z"/>
              <path id="path23" class="svg216_cls-4" d="M759.73,300.1s-6.85,23.73-24.55,13.95C735.18,314.05,735.63,290.45,759.73,300.1Z"/>
              <path id="path25" class="svg216_cls-4" d="M699.15,289s-19.6,15-4,27.94C695.12,317,716.93,308,699.15,289Z"/>
              <rect id="rect27" class="svg216_cls-5" x="682.5" y="314.5" width="68" height="78"/>
              <rect id="rect29" class="svg216_cls-1" x="677" y="363" width="70" height="34"/>
            </g>
            <g id="Camada_2" data-name="Camada 2">
              <g id="g36" class="leaf_lite">
                <path id="path32" class="svg216_cls-3" d="M597,540C474,495,477,411,477,411c34-8,79,27,104,47s58.21,54.18,83,72a682.18,682.18,0,0,0,61,39S667.09,565.64,597,540Z"/>
                <path id="path34" class="svg216_cls-1" d="M473.5,408.5s27,32,71,66,99,62,99,62l82,33"/>
              </g>
              <g id="g42">
                <path id="path38" class="svg216_cls-3" d="M123.5,527.5s-53-125-17-196C106.5,331.5,166.5,375.5,123.5,527.5Z"/>
                <path id="path40" class="svg216_cls-1" d="M106.5,329.5s17,173,20,190"/>
              </g>
              <g id="g48" class="leaf_lite">
                <path id="path44" class="svg216_cls-3" d="M270.5,571.5s-70-171-42-248C228.5,323.5,316.5,492.5,270.5,571.5Z"/>
                <path id="path46" class="svg216_cls-1" d="M226.5,316.5s53,187,44,255"/>
              </g>
              <g id="g54" class="leaf_lite">
                <path id="path50" class="svg216_cls-4" d="M194,450c-5.3,13.25-11,115-56,122,0,0-21.71-48.26,6-124,15-41,35.47-56.07,50-64,11-6,31-13,45-7C239,377,204,425,194,450Z"/>
                <path id="path52" class="svg216_cls-6" d="M239.5,377.5l-32,22s-30,29-44,63c-9.52,23.12-24,109-24,109"/>
              </g>
              <g id="g60" class="leaf_lite">
                <path id="path56" class="svg216_cls-4" d="M40,375C23.13,364.13,2,365,2,365s17,18.81,32,54.4S103,562,139,571C139,571,152,447.13,40,375Z"/>
                <path id="path58" class="svg216_cls-6" d="M1.5,364.5s91.5,66.5,138,208"/>
              </g>
              <g id="g66">
                <path id="path62" class="svg216_cls-7" d="M213,554c64.46-13.81,115-54,115-54-22-8-96-4-126,3-18.19,4.24-58,18-63,69h1s34.12-12.22,43-14C193,556,199,557,213,554Z"/>
                <path id="path64" class="svg216_cls-6" d="M139.5,571.5s31-30,56-42,134-30,134-30"/>
              </g>
              <g id="g72">
                <path id="path68" class="svg216_cls-3" d="M34,506.72C55,509,106,549,134,569c1-.3-40-16-90-12-24.15,1.93-38-32-38-32S13,504.44,34,506.72Z"/>
                <line id="line70" class="svg216_cls-1" x1="3.5" y1="524.5" x2="134.5" y2="568.5"/>
              </g>
              <g id="g78" class="leaf_lite">
                <path id="path74" class="svg216_cls-4" d="M581,455c-56.22-39.69-31-73,13-71,25,1.14,62,21.28,77,43,36,52,54,142,54,142-39.51-49.12-38.26-49.9-64-69C630,477,615,479,581,455Z"/>
                <path id="path76" class="svg216_cls-6" d="M726.5,570.5s-42-95-62-122-53-42-53-42l-51-6"/>
              </g>
              <g id="g84">
                <path id="path80" class="svg216_cls-3" d="M448,386c3.9-23.15,46-144,93-13s0,203,0,203l-64,3S434,469,448,386Z"/>
                <polyline id="polyline82" class="svg216_cls-1" points="498.5 311.5 493.5 388.5 507.5 576.5"/>
              </g>
              <g id="g90">
                <path id="path86" class="svg216_cls-7" d="M357,468c-58-49.34-264-251,2.5-176.5C468.23,321.9,539,485,525,577l-48,2S424,525,357,468Z"/>
                <path id="path88" class="svg216_cls-6" d="M242.5,292.5l79,26s47.07,16.93,91,64c70,75,90,195,90,195"/>
              </g>
              <g id="g96" class="leaf_lite">
                <path id="path92" class="svg216_cls-3" d="M341.07,557.45c-24,.61-70.24,13.74-70.24,13.74,16.41-39.19,66.29-57.58,66.29-57.58s29.26-12,62.72-6.22,86,56.37,86,56.37-38.28,9.41-74.7,7C380.92,568.8,365.08,556.84,341.07,557.45Z"/>
                <path id="path94" class="svg216_cls-1" d="M270.37,571.72S317.58,536,355.82,530.9s65.66,7.61,65.66,7.61l65.87,25.64"/>
              </g>
              <g id="g102">
                <path id="path98" class="svg216_cls-4" d="M816,476c-19-22-56-27-75-54-14.67-20.85,36-50,94,12,34.9,37.31,49,143,49,143S835,498,816,476Z"/>
                <path id="path100" class="svg216_cls-6" d="M741.5,403.5l65,25s17,13,35,44,43,107,43,107"/>
              </g>
              <g id="g108">
                <path id="path104" class="svg216_cls-7" d="M269,572s13.5-160.5,86-210a150,150,0,0,1,39-19,296.06,296.06,0,0,1-21,58C361.39,425,294,568,269,572Z"/>
                <path id="path106" class="svg216_cls-6" d="M396.5,338.5s-26,29-45,58c-16,24.39-52,101-52,101l-30,75"/>
              </g>
              <g id="g114" class="leaf_lite">
                <path id="path110" class="svg216_cls-3" d="M890.5,573.5s97-227,77-274C967.5,299.5,883.5,377.5,890.5,573.5Z"/>
                <line id="line112" class="svg216_cls-1" x1="968" y1="294" x2="889.5" y2="575.5"/>
              </g>
              <g id="g120" class="leaf_lite">
                <path id="path116" class="svg216_cls-3" d="M725,570l55-212S838,548,725,570Z"/>
                <path id="path118" class="svg216_cls-1" d="M724.5,569.5s26-6,49-98c5.9-23.6,7-57,7-57L780,353"/>
              </g>
              <g id="g126" class="leaf_lite">
                <path id="path122" class="svg216_cls-3" d="M806,344c-56-61-3-55-3-55s27.34,7.67,54,36c32,34,85,161,28,255,0,0-38.07-158.37-50-187C825,369,806,344,806,344Z"/>
                <path id="path124" class="svg216_cls-1" d="M784.5,296.5l34,18s35,24,53,86,15,184,15,184"/>
              </g>
              <g id="g132">
                <path id="path128" class="svg216_cls-4" d="M886.5,576.5s-50-136-20-214C866.5,362.5,969.5,379.5,886.5,576.5Z"/>
                <line id="line130" class="svg216_cls-6" x1="866.5" y1="359.5" x2="886.5" y2="579.5"/>
              </g>
              <g id="g138">
                <path id="path134" class="svg216_cls-4" d="M889,575s25.22-113.63,86-142a41.29,41.29,0,0,1,29-2s-9.09,34.68-29,57.34S902,555,889,575Z"/>
                <line id="line136" class="svg216_cls-6" x1="1004.5" y1="431.5" x2="888.5" y2="573.5"/>
              </g>
            </g>
            <g id="Camada_1" data-name="Camada 1">
              <path id="path141" class="svg216_cls-8" d="M980,248l-162,2,2,333.11L981.22,580ZM827.11,572V256H970.22l2.24,317.5Z"/>
              <path id="path143" class="svg216_cls-8" d="M818,250l-185.52-3-1,336.11H820ZM640,575l2-319H810.46L812,574Z"/>
              <path id="path145" class="svg216_cls-8" d="M394,248.21,389.9,584H621.46l1-337ZM606.63,571.5,403.16,570,401,271H607.11Z"/>
              <path id="path147" class="svg216_cls-8" d="M194.5,249.5l-2,333.17,184,1.33V248.21Zm170.62,320L199,569l2.21-312.5H365.49Z"/>
              <path id="path149" class="svg216_cls-8" d="M191.5,247.5H15.86L19.5,582.75l173.69,2.75Zm-7,327.73H35L37.5,256.5h147Z"/>
              <path id="path151" class="svg216_cls-3" d="M503,0,0,248V749H1010V248ZM397,230V100H610V230ZM638,82,969,244H638ZM503,14,626,77H385ZM371,82V244H40ZM189,578H33V253H189Zm182,0H197V253H371Zm239-2H397V266H610Zm204,1H638V252H814Zm161,0H823V252H975Z"/>
              <g id="g157">
                <rect id="rect153" class="svg216_cls-9" x="397" y="266" width="213" height="310"/>
                <path id="path155" class="svg216_cls-4" d="M384,88V747H626V88ZM610,576H397V266H610Zm0-346H397V100H610Z"/>
              </g>
              <rect id="rect159" class="svg216_cls-2" x="644" y="247" width="176" height="325"/>
              <rect id="rect161" class="svg216_cls-2" x="191.5" y="247.5" width="176" height="325"/>
              <polygon id="polygon163" class="svg216_cls-2" points="380 72 498 9 621 72 380 72"/>
              <polygon id="polygon165" class="svg216_cls-2" points="363.5 74.5 32.5 236.5 363.5 236.5 363.5 74.5"/>
              <polygon id="polygon167" class="svg216_cls-2" points="638 75 969 237 638 237 638 75"/>
              <rect id="rect169" class="svg216_cls-3" x="189" y="166" width="8" height="78"/>
              <rect id="rect171" class="svg216_cls-3" x="815" y="166" width="8" height="78"/>
              <rect id="rect173" class="svg216_cls-5" x="638" y="590" width="336" height="143"/>
              <rect id="rect175" class="svg216_cls-5" x="35" y="590" width="336" height="143"/>
              <rect id="rect177" class="svg216_cls-10" x="402" y="253" width="213" height="310"/>
              <rect id="rect179" class="svg216_cls-10" x="398.5" y="593.5" width="211" height="139"/>
              <rect id="rect181" class="svg216_cls-10" x="390.5" y="93.5" width="107" height="145"/>
              <rect id="rect183" class="svg216_cls-10" x="513.5" y="91.5" width="107" height="145"/>
              <rect id="rect185" class="svg216_cls-2" x="825.5" y="260.5" width="176" height="325"/>
              <rect id="rect187" class="svg216_cls-1" x="23.5" y="592.5" width="165" height="39"/>
              <rect id="rect189" class="svg216_cls-1" x="19.5" y="637.5" width="165" height="39"/>
              <rect id="rect191" class="svg216_cls-1" x="26.5" y="686.5" width="165" height="39"/>
              <rect id="rect193" class="svg216_cls-1" x="205.5" y="585.5" width="165" height="39"/>
              <rect id="rect195" class="svg216_cls-1" x="201.5" y="635.5" width="165" height="39"/>
              <rect id="rect197" class="svg216_cls-1" x="208.5" y="684.5" width="165" height="39"/>
              <rect id="rect199" class="svg216_cls-1" x="635.5" y="604.5" width="165" height="39"/>
              <rect id="rect201" class="svg216_cls-1" x="631.5" y="649.5" width="165" height="39"/>
              <rect id="rect203" class="svg216_cls-1" x="638.5" y="698.5" width="165" height="39"/>
              <rect id="rect205" class="svg216_cls-1" x="817.5" y="597.5" width="165" height="39"/>
              <rect id="rect207" class="svg216_cls-1" x="813.5" y="647.5" width="165" height="39"/>
              <rect id="rect209" class="svg216_cls-1" x="820.5" y="696.5" width="165" height="39"/>
              <line id="line211" class="svg216_cls-1" x1="646.5" y1="530.5" x2="719.5" y2="565.5"/>
              <rect id="rect213" class="svg216_cls-2" x="12.5" y="260.5" width="176" height="325"/>
            </g>
          </svg>
        </div>
        <?php endwhile; 
        endif; ?>



    </div> <!-- scroll-canvas -->

</div> <!-- scroll-wraper -->
<div class="scroll_line"></div>

<?php get_footer(); ?>
