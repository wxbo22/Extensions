[{"Owner":"Visam","Date":"2017-09-02T22:25:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course_co_ there are at least two ways to do it_dd_ for each scene mesh to do rotateAround or create a _qt_root_qt_ mesh / set as parent and do the same (rotateAround).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut may be there is another way to rotate whole scene around a pivot?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-09-03T06:31:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_187558_qt_ data-ipsquote-contentid_eq__qt_32723_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1504391106_qt_ data-ipsquote-userid_eq__qt_24621_qt_ data-ipsquote-username_eq__qt_iTekVR_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ iTekVR said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tOf course_co_ there are at least two ways to do it_dd_ for each scene mesh to do rotateAround or create a _qt_root_qt_ mesh / set as parent and do the same (rotateAround).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBut may be there is another way to rotate whole scene around a pivot?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThanks\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWhy do you need rotate whole scene? _lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tJust move camera around scene.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Visam","Date":"2017-09-03T11:10:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_187575_qt_ data-ipsquote-contentid_eq__qt_32723_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1504420301_qt_ data-ipsquote-userid_eq__qt_27658_qt_ data-ipsquote-username_eq__qt_Arte_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Arte said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhy do you need rotate whole scene? _lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tJust move camera around scene.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tsometime engineers need to make a model transformations like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//knowledge.autodesk.com/support/navisworks-products/learn-explore/caas/CloudHelp/cloudhelp/2017/ENU/Navisworks-Manage/files/GUID-03F75CA8-F545-4AB6-ADEC-42A6FEB71002-htm.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//knowledge.autodesk.com/support/navisworks-products/learn-explore/caas/CloudHelp/cloudhelp/2017/ENU/Navisworks-Manage/files/GUID-03F75CA8-F545-4AB6-ADEC-42A6FEB71002-htm.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit means a transformation should be applied to whole scene _dd_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso it can help to fix _qt_the up axis problem_qt_. You can take a look at the example _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2EE9UD%2319_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2EE9UD#19_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can change the camera position (line 9_co_10_co_11) but you will not be able to set X or Z as up axis to rotate around.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-09-03T13:17:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24621-itekvr/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24621_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24621-itekvr/_qt_ rel_eq__qt__qt__gt_@iTekVR_lt_/a_gt_ I_t_m not getting you point._lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIf you make invisible parent box_co_ attach all you models to parent_co_ then you can rotate?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__qt_the up axis problem_qt_ - In my project I_t_m treating Yaxis as Zaxis. _lt_/span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Visam","Date":"2017-09-03T14:06:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_187592_qt_ data-ipsquote-contentid_eq__qt_32723_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1504444623_qt_ data-ipsquote-userid_eq__qt_27658_qt_ data-ipsquote-username_eq__qt_Arte_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t50 minutes ago_co_ Arte said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSorry _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24621-itekvr/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24621_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24621-itekvr/_qt_ rel_eq__qt__qt__gt_@iTekVR_lt_/a_gt_ I_t_m not getting you point._lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you make invisible parent box_co_ attach all you models to parent_co_ then you can rotate?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__qt_the up axis problem_qt_ - In my project I_t_m treating Yaxis as Zaxis. _lt_/span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tof course_co_ I can make invisible box. I wrote about it in my first message_dd_ _qt_ create a _qt_root_qt_ mesh / set as parent ...._qt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut what will you do if you want to change up axis dynamically? something like this_dd_ _lt_a href_eq__qt_https_dd_//knowledge.autodesk.com/support/navisworks-products/troubleshooting/caas/sfdcarticles/sfdcarticles/How-to-change-model-orientation-in-Navisworks.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//knowledge.autodesk.com/support/navisworks-products/troubleshooting/caas/sfdcarticles/sfdcarticles/How-to-change-model-orientation-in-Navisworks.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy point is try to find easy solution to apply a transformation to a scene instead of to each mesh or to a parent mesh _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]