[{"Owner":"Ahiru","Date":"2015-09-17T15:27:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a simple scene_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#CTHIE%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#CTHIE#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShould there not be only ONE draw call and ONE material? Why there are 3 respectively 2 of them?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-09-17T16:11:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_1 draw call only for me and 3 materials here_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-09-17T16:11:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-09-17T16:13:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_My problem is that I have several of these boxes in one scene_co_ and they always cause 3 draws per box - that adds up fast._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And meshing them did not work either_co_ because they are not rendered_co_ then._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-09-17T16:19:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ahiru_co_ I got the same result as Jerome._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-09-17T16:32:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I get 1 draw &amp_sm_ 3 materials_co_ using Firefox 40.  Notice that you are pushing 78k vertices.  Which exporter are you using?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-09-17T18:03:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_*blush* - wrong link in clipboard.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ alt_eq__qt__dd_blink_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edited!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-09-17T18:58:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The href is still pointing to the original link.  Here_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CTHIE%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#CTHIE#4_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-09-17T19:00:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Looks like _qt_show bounding box_qt_ requires 2 draw calls per mesh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-09-17T19:29:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmm - is there a better way just to show the edges like a wireframe?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-18T02:21:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_you can set material.wireframe _eq_ true_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CTHIE%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#CTHIE#5_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-09-18T03:54:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tried already before (was my first idea) - but nothing is shown_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CTHIE%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#CTHIE#6_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your example uses _qt_CreateBox_qt_ again_co_ ignoring_co_ that I only have the min and max Verticex to create the box. (I know - I could write a function that calculates from there the center and scaling-factors and create a box and scale and move it around - and use the RenderEdges function in the end_co_ because the wireframe splits the faces of the cube_co_ wich is not intended)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I liked it to see that there seemed an easy way to build a box with 2 Vertices only_dd_ - only the 3 draw calls for the bounding box are irritating and makes it slow in the end _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var min_coordinates _eq_ new BABYLON.Vector3(-4_co_ -10_co_ -2)_sm_var max_coordinates _eq_ new BABYLON.Vector3(20_co_ 1_co_ 10)_sm_var custombb_mesh _eq_ new BABYLON.Mesh(_qt_custom_boundingbox_qt__co_ scene)_sm_var vertexdata _eq_ new BABYLON.VertexData()_sm_vertexdata.indices _eq_ []_sm_vertexdata.positions _eq_ [\tmin_coordinates.x_co_ min_coordinates.y_co_ min_coordinates.z_co_\tmax_coordinates.x_co_ max_coordinates.y_co_ max_coordinates.z]_sm_vertexdata.applyToMesh(custombb_mesh)_sm_custombb_mesh.showBoundingBox _eq_ true_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-09-18T03:59:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_By the way DK - you asked for wishes for the next version_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How about_dd_ BABYLON.BoundingBox.Show() ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I use it for debugging reasons to visualise my bounding - boxes._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-18T17:39:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_what do you mean by show? you can enable mesh.showBoundingBox _eq_ true_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-09-18T18:25:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes - that_t_s when a mesh exists_co_ that has a BoundingBox - what about manual created boundingBoxes like I would use to visualise the bounding boxes of an Octree?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-09-18T18:43:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tConcrete (please don_t_t look too close at the code - not ready yet _lt_img alt_eq__qt__dd_D_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_)_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#URBLI%2331_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#URBLI#31_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut every box will take 3!! draw-calls making it unusable for bigger Tree-Visualisations\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-18T21:24:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI reduced it thanks to some optims _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#URBLI%2332_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#URBLI#32_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-09-18T22:20:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey - thanks - works well!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]