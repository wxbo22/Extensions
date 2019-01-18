[{"Owner":"ozRocker","Date":"2015-07-16T04:34:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve been using the Unity exporter and its awesome!  Makes my life a lot easier _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Something I_t_m struggling with at the moment is referring to my game objects in Babylon.js.  I have some cubes in Unity which I have assigned different names to_co_ however the exporter doesn_t_t use those names_co_ but uses the name of the base mesh_co_ which is _qt_Cube_qt_.  Unfortunately that means every single cube (as well as all primitive shapes) have the same name.  Assigning a tag to them in Unity doesn_t_t help since tags don_t_t get exported with the object.  The only way I can refer to these different cubes is by searching the resulting .babylon file to look for all the cubes and get their IDs.  I have to do this every time I export since those IDs change.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Does anyone know of an easier way I can refer to my different cubes_co_ or a way I can get the exporter to use game object name instead of mesh name?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-07-16T15:34:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I solved it!  Hopefully it doesn_t_t break other stuff_co_ but so far it works._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_open file _qt_SceneBuilder.Meshes.cs_qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_look for function _qt_ConvertUnityMeshToBabylon_qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_in the first few lines look for_dd__lt_/p_gt__lt_div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ExporterWindow.ReportProgress(progress_co_ _qt_Exporting mesh_dd_ _qt_ + mesh.name)_sm__lt_/pre_gt__lt_/div_gt__lt_/div_gt__lt_div_gt_and change to_dd__lt_/div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ExporterWindow.ReportProgress(progress_co_ _qt_Exporting mesh_dd_ _qt_ + gameObject.name)_sm__lt_/pre_gt__lt_/div_gt__lt_div_gt_and look for_dd__lt_/div_gt__lt_div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_babylonMesh.name _eq_ mesh.name_sm__lt_/pre_gt__lt_/div_gt__lt_div_gt_and change to_dd__lt_/div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_babylonMesh.name _eq_ gameObject.name_sm__lt_/pre_gt__lt_/div_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-07-16T16:26:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Awesome ! Is it possible for you to make a pull request on the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_official repo_lt_/a_gt_ ? It would be great _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-16T16:33:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes please do a PR to get credits as well on our what_t_s new _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ And thus become an official contribuor _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-07-17T03:46:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok_co_ hopefully I did everything right.  I_t_ve created a pull request for my branch punkoffice.  Now I_t_m familiar with the exporter code I will go through it often and see what else I can add or improve.  I_t_m a massive Unity3D fan but their webGL conversion is way too bulky.  It won_t_t work on IE and no chance in hell it_t_ll work on a mobile device.  Its not suitable for a personal info 3D website at all (which is what I_t_m working on).  That_t_s why I switched to Babylon.js_co_ but I thought it would be painful to have to create a whole scene by code.  Having the Unity exporter is a dream come true!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-17T16:39:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do not see your PR so far _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-07-17T16:57:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_M IN!! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Hopefully I can contribute more than just a variable change in the near future_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-17T18:29:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Welcome  in the family my friend!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Feel free to update the what_t_s new for 2.2 as well to have your PR credited _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-17T20:35:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Welcome on board_lt_/p_gt__lt_p_gt_(it seems I wrote this once before today on this forum  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]