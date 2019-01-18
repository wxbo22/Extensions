[{"Owner":"ozRocker","Date":"2017-04-16T07:45:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI can see the Typescript file only in the GIT repo.  however I did have an older copy of the objLoader.  Weird thing is that I cannot access materials from meshes loaded with the objLoader.  I can see the materials property when I print the mesh to the console but when I try to access it in code it says its undefined.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-04-16T08:24:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you try this one ? _lt_a href_eq__qt_https_dd_//babylonjs.azurewebsites.net/lib/babylon.objFileLoader.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//babylonjs.azurewebsites.net/lib/babylon.objFileLoader.js_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-16T09:15:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_171175_qt_ data-ipsquote-contentid_eq__qt_29795_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1492331099_qt_ data-ipsquote-userid_eq__qt_5218_qt_ data-ipsquote-username_eq__qt_Temechon_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t49 minutes ago_co_ Temechon said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCan you try this one ? _lt_a href_eq__qt_https_dd_//babylonjs.azurewebsites.net/lib/babylon.objFileLoader.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//babylonjs.azurewebsites.net/lib/babylon.objFileLoader.js_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI still have problems with undefined material with that one.  What I noticed is that the material eventually appears.  I have to check for it in the render loop and once its no longer _qt_undefined_qt_ I can use it.  It appears after about 4 frames.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-22T01:14:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe have resolved the _qt_undefined materials_qt_ problem here in this thread_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/29851-how-to-use-obj-loader-in-playground/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]