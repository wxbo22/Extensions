[{"Owner":"qqdarren","Date":"2015-05-12T16:12:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_An API design question I_t_ve not seen answered_co_ is why the first parameter of just about all the API calls is a name? Is it really needed? The library would be lighter_co_ quicker and all examples would be shorter without it_co_ so is it bringing enough functionality to make it worth that?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In all the examples I_t_ve seen you end up with _lt_em_gt_not-DRY_lt_/em_gt_ code like the below (extracted from the Height Map example in the playground)_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_10px_sm__qt__gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_var spot _eq_ new BABYLON.SpotLight(_qt_spot_qt__co_ ...)_sm__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_10px_sm__qt__gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ ...)_sm__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_10px_sm__qt__gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_var groundMaterial _eq_ new BABYLON.StandardMaterial(_qt_ground_qt__co_ scene)_sm__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_10px_sm__qt__gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_var ground _eq_ BABYLON.Mesh.CreateGroundFromHeightMap(_qt_ground_qt__co_ ...)_sm__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_10px_sm__qt__gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_var sun _eq_ BABYLON.Mesh.CreateSphere(_qt_sun_qt__co_ 10_co_ 4_co_ scene)_sm__lt_br_gt_sun.material _eq_ new BABYLON.StandardMaterial(_qt_sun_qt__co_ scene)_sm__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_10px_sm__qt__gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_var skybox _eq_ BABYLON.Mesh.CreateBox(_qt_skyBox_qt__co_ 800.0_co_ scene)_sm__lt_br_gt_var skyboxMaterial _eq_ new BABYLON.StandardMaterial(_qt_skyBox_qt__co_ scene)_sm__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt__lt_span style_eq__qt_font-size_dd_10px_sm__qt__gt_skyboxMaterial.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_textures/skybox_qt__co_ scene)_sm__lt_/span_gt__lt_/span_gt__lt_br_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-12T16:20:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_There are methods to get things by name.  Kind of useful when you are trying to get a materialByName from a an export from Blender or the other one_co_ the Adobe thing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can set it to null for your own create stuff.  If it makes you feel any worse_co_ there is also an _t_id_t_ field._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-12T17:30:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_And an Auto generated Unique id _dd_-)_lt_/p_gt__lt_p_gt_Name is actually useful when dealing with many meshes _co_ cameras and materials._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]