[{"Owner":"pranoy","Date":"2016-01-03T09:06:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We have used asset manager to import meshes into scene with the default loading UI. How can we show the progress of the load as can be seen in the link_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//webtrude.com/Models/hs00/trial4_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//webtrude.com/Models/hs00/trial4_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also can anyone post a babylonjs playground example for implementing a custom loading UI._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-01-03T12:22:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_br_gt__lt_br_gt_Something like this_dd__lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_                BABYLON.SceneLoader.Load(rootScene_co_ strSceneData_co_ engine_co_ function (newScene) {\t\t\t\t\t\t\t\t\t\t\t}_co_ function (evt) {\t\t\tif (evt.lengthComputable) {\t\t\t\tengine.loadingUIText _eq_ _qt_Loading_dd__qt_ +(evt.loaded * 100 / evt.total).toFixed() + _qt_%_qt__sm_\t\t\t} else {\t\t\t\tdlCount _eq_ evt.loaded / (1024 * 1024)_sm_\t\t\t\tengine.loadingUIText _eq_ _qt_Loading_dd__qt_ + Math.floor(dlCount * 100.0) / 100.0 + _qt_ MB_qt__sm_\t\t\t}\t\t})_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pranoy","Date":"2016-01-03T12:42:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_We have implemented this for sceneLoader but how can we implement this with asset manager?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-01-03T13:21:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Good question ... I do not know. I do not think it has been provided for_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-04T17:22:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This?_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Creating_a_custom_loading_screen_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Creating_a_custom_loading_screen_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-01-04T18:23:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_for _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_asset manager _lt_/span_gt_it works too?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-04T19:52:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pranoy","Date":"2016-01-07T06:12:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Could you show a demo of how to use the custom loading screen _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]