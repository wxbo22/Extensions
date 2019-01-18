[{"Owner":"JohnK","Date":"2016-07-21T14:58:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot so much a question as an answer I hope. Scroll down to the bottom if you want to get to the important bit about how to do it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVery slowly I am putting together a BJS Guide as a companion to the official documentation and working on materials I came across reflectionTextures and MirrorTextures.and got well lost. With some help from _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/23702-anyone-explain-reflectiontexturecoordinatesmode/?do_eq_embed_qt__gt__lt_/iframe_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI sort of got it for coordinatesMode and started on mirrors and couldn_t_t make them work. So after a search or two I found _lt_span_gt__lt_span_gt_@Luaacro_lt_/span_gt_ _lt_/span_gt__t_s _lt_a href_eq__qt_https_dd_//books.google.co.uk/books?id_eq_JePgCwAAQBAJ&amp_sm_pg_eq_PA79&amp_sm_lpg_eq_PA79&amp_sm_dq_eq_babylons+mirror+plane&amp_sm_source_eq_bl&amp_sm_ots_eq_LqAcIKMzpU&amp_sm_sig_eq_bZiWBvpxhtiWke1AAzM37YJN_Yg&amp_sm_hl_eq_en&amp_sm_sa_eq_X&amp_sm_ved_eq_0ahUKEwj1novp___NAhWLuhoKHXgHAwcQ6AEILTAC#v_eq_onepage&amp_sm_q_eq_babylons%20mirror%20plane&amp_sm_f_eq_false_qt_ rel_eq__qt_external nofollow_qt__gt_book_lt_/a_gt_ _co_ @JCPalmer _t_s and @dbawel _t_s discussion\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/12411-problems-with-mirror-texture/?do_eq_embed&amp_sm_embedComment_eq_71717&amp_sm_embedDo_eq_findComment#comment-71717_qt__gt__lt_/iframe_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_All very useful but I knew I had to sort out mirrors for my own satisfaction. First I needed to know if the reflection was as far behind the mirror as the object was in front_co_ set I set up the construction of a rod from the object to where the reflection should be then I set out to play with mirrors until it worked. Finally after three days I think I have cracked it (so forgive me for a little joy and the post) _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YAIO7%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YAIO7#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHERE BE CRACKED MIRRORS\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Hopefully this will be useful for others - the important bit - the explanation lies with the guide _lt_/span_gt__lt_a href_eq__qt_http_dd_//babylonjsguide.github.io/advanced/Reflect_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjsguide.github.io/advanced/Reflect_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe guide is in early days of construction so not much there at the moment but it is something I can give back to BJS_co_ et al.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-07-21T16:25:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tjust a note _dd_ this is Luaacro_t_s book_co_ not mine _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-07-21T16:31:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks will edit_co_ saw the J for Julian followed by M for Moreau and thought Jerome.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMust learn to read one day_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-07-21T17:08:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhy is the sphere not visible in the mirror at this camera angle?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YAIO7%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YAIO7#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-07-21T17:12:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLooks like it was the light source being too intense combined with the alpha of the mirror.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YAIO7%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YAIO7#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]