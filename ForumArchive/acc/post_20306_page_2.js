[{"Owner":"Vousk-prod.","Date":"2016-02-11T04:27:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAh ah_co_ thanks a lot Wingnut! You ruined my chance far less than me not contacting them at all._lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIf one day I work for Aardman_co_ I_t_ll invite you for a journey in the studio. _lt_img alt_eq__qt_B)_qt_ data-emoticon_eq__qt_true_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_cool.png_qt_ title_eq__qt_B)_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-02-11T12:24:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_116247_qt_ data-ipsquote-contentid_eq__qt_20306_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1455163634_qt_ data-ipsquote-userid_eq__qt_11783_qt_ data-ipsquote-username_eq__qt_amarneethi_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ amarneethi said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt__gt_@Nockawa_lt_/a_gt_ I had a look at your playground_co_ with all respect the movement looks very similar to what it is in my other playground scene. Maybe this is because the inertia is not implemented yet (as you mentioned) or something else_co_ I dunno. But thanks for pitching in buddy.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/6528-vousk-prod/?do_eq_hovercard_qt_ data-mentionid_eq__qt_6528_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/6528-vousk-prod/_qt__gt_@Vousk-prod._lt_/a_gt_ Yeah you are right about the movement being followed perfectly_co_ but that can be fixed by increasing the factor from 300 to 500 at line 85 and 86 in the playground scene. As for the unexpected rotation_co_ I have no idea how to fix that. haha. Let_t_s see if someone from the forum can throw some light on the solution.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#CGXLT%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#CGXLT#5_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_@amarneethi_dd_ mine solve the _qt_unexpected rotation_qt_ issue you have_co_ try rotating 90° on X_co_ then 90° on Y_co_ _lt_/span_gt_you will see the mesh always rotates in the direction of the mouse.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhich is not the case for you because you apply mouse move in Rotation.x/y of the mesh_co_ so it_t_s always local and it_t_s disturbing the user because he/she expects a rotation in camera space_co_ not the mesh_t_s space.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amarneethi","Date":"2016-02-11T18:39:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think I got mixed up with diff issues. Sorry guys. Peace _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-11T21:45:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis needs to be easier_co_ maybe.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBabylon.meshCamera class?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe a constructed-frozen universalCamera_co_ aimed directly at its .target.  The input activity (mouse_co_ gamepad_co_ touch)... controls .target mesh AS IF the target mesh was an ArcRotateCamera viewed from a distance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure what we would do with the mouse wheel.  Technically_co_ the mousewheel would move the target mesh closer/farther_co_ but_co_ maybe the mousewheel stays with the camera (the ONLY characteristic of the meshCamera that moves via input device).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr_co_ maybe not.  *shrug*  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gelosoft","Date":"2017-01-08T09:25:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAll good day!_lt_br /_gt_\n\tI really liked the approach _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#DKROG%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#DKROG#4_lt_/a_gt__lt_br /_gt_\n\tBut I_t_m not very strong in 3D (I usually frontend-developer). Could you suggest how to implement in your example_co_ the rotation of the inertia?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]