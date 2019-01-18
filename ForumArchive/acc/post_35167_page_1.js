[{"Owner":"pichou","Date":"2018-01-18T20:44:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is one simple question but I haven_t_t found an answer in the doc or here so I ask _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tWhen I simplify a mesh and clone it after. Will my cloned mesh be simplified too or not?_lt_br /_gt_\n\tAnd have I to wait for the mesh to be simplified before cloning it to have the simplification on it?_lt_br /_gt__lt_br /_gt_\n\tThanks_co_ Pichou\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-18T21:17:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe simplification process generates LOD for the current mesh_co_ so the mesh data is saved and unchanged. The simplification generates a new mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo cloning the mesh will clone the original data _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2018-01-19T08:57:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk so if I understand correctly _dd_ cloning will clone the original data but not the simplificated mesh generated?_lt_br /_gt_\n\t_lt_br /_gt_\n\tAnd thus you must simplify every mesh cloned or is there a way to apply the simplication from one mesh to another?_lt_br /_gt_\n\t_lt_br /_gt_\n\tThanks @deltakosh\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-19T23:32:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOnce the first mesh is simplified you can simply reuse the LODs generated for the first one and add them to the cloned meshes\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2018-01-20T13:46:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk how should I do that?_lt_br /_gt_\n\t_lt_br /_gt_\n\tI don_t_t see/find how I can get the LODs generated and add them to another mesh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-01-20T15:48:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  Sorry to interrupt.  I think those are stored in mesh._LODLevels\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee console... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2QEFG%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2QEFG#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess you could try some clones/instances of sphere_co_ and see if ._LODLevels property... arrives safely at the new mesh.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf not_co_ just steal a copy of masterMesh._LODLevels.  Do some _t_deep copying_t__co_ Pichou-style.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope I_t_ve been helpful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ I needed to go _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.ts#L320_qt_ rel_eq__qt_external nofollow_qt__gt_source-diving_lt_/a_gt_ to find the ._LODLevels property.  I could not _t__qt_discover_qt_ it... using a browser-based object inspector... on sphere.  Maybe my eyes are going bad.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-22T15:59:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll add a getLODLevels() function in the next push _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]