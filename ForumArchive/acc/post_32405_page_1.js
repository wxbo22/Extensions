[{"Owner":"mainequin","Date":"2017-08-16T10:44:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Folks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn our scene we have some images with transparency_lt_br /_gt_\n\ton quads. The transparency is just used to mask the_lt_br /_gt_\n\tsilhouettes of the image_co_ so we have no larger half-_lt_br /_gt_\n\ttransparent areas. So far we used the default shader_lt_br /_gt_\n\tfor this_co_ which produced nice silhouettes._lt_br /_gt_\n\tAll these Objekt are registered in a shadow generator_lt_br /_gt_\n\tfrom which we extract the shadow map an pass it in_lt_br /_gt_\n\ta custom shader.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter writing our own shader for the images we ran_lt_br /_gt_\n\tinto a problem_dd_ The shadow generator now only takes_lt_br /_gt_\n\tthe quad into account_co_ not the transparency of the_lt_br /_gt_\n\timage. Therefor the shadows of these images are_lt_br /_gt_\n\tsquare.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen constructing the custom shader we tell baby-_lt_br /_gt_\n\tlon to use alpha blending and we also tell the shadow-_lt_br /_gt_\n\tgenerator to use transparency shadows. The diffuse_lt_br /_gt_\n\ttexture is simply loaded with a texture sampler in-_lt_br /_gt_\n\tcluding the alpha channel. We even tried to clip frag-_lt_br /_gt_\n\tments under a certain value but the shadow genera-_lt_br /_gt_\n\ttor still ignores it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe looked through the default shader but couldn_t_t_lt_br /_gt_\n\tfind anything that_t_s helping us in this matter. We_lt_br /_gt_\n\tfound the opacity map_co_ which to our understanding_lt_br /_gt_\n\tis just a separate_co_ black and white masking texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo our question is_dd_ What steps are necessiary to_lt_br /_gt_\n\tgenerate shadow silhouettes based on the alpha_lt_br /_gt_\n\tchannel of an objects texture? As we said_co_ clipping_lt_br /_gt_\n\twith a threshold or cutout for that matter would be_lt_br /_gt_\n\tenough.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for your time_lt_br /_gt_\n\t-Mainequin Team\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-08-16T12:30:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Mainequin &amp_sm_ Team!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if this applies_co_ but a user once asked about something similar_co_ and we made THIS playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1Z89KY%2310_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1Z89KY#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not a very good coder_co_ so mistakes and unnecessary settings are likely.  If this playground is NOT on-topic_co_ then feel free to modify it until it is so.  Most forum helpers like to see the issue _lt_em_gt_repro_t_d_lt_/em_gt_ (reproduced) in a BJS playground scene.  Then everyone can experiment with it_co_ easier.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet me try to summarize/restate.  You have an array of mesh_co_ similar to _lt_a href_eq__qt_https_dd_//i.ytimg.com/vi/GiUn1NjIdxg/maxresdefault.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_a wall-of-monitors_co_ with a single texture/image that spans all the tiles_lt_/a_gt_.  You would like the shadow generator to treat this tiled mesh-array as a single mesh/texture_co_ and cast shadows from the non-alpha parts of the texture.  Did I restate that correctly?  (I hope so)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI think the above-reffed playground can show how to do that... perhaps.  Without mesh-merging all the tiles_co_ I think you will need to push ALL tiles into the shadowList.  It might be the _lt_em_gt_.useAlphaFromDiffuseTexture_lt_/em_gt_ that is important_co_ here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ we_t_re rolling with a testing playground_co_ at least.  Sorry if I misunderstood the issue.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mainequin","Date":"2017-09-04T08:29:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDear Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you for your answer! It took some time but_lt_br /_gt_\n\twe peeled the relevant code from our project and_lt_br /_gt_\n\tused the code from your example playground to_lt_br /_gt_\n\tillustrate our problem. Basiaclly we want to repro-_lt_br /_gt_\n\tduce what you did using the default shader with_lt_br /_gt_\n\tour custom shader.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#VZKI0U%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#VZKI0U_lt_br /_gt_\n\t#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see in this example_co_ Felix correctly re-_lt_br /_gt_\n\tceives shadows_co_ but does not cast them accord-_lt_br /_gt_\n\ting to his silhouette. Changing the _qt_hasAlpha_qt_ set-_lt_br /_gt_\n\ttings of the texture does not change this behavi-_lt_br /_gt_\n\tour. Our guess is_co_ that the depth texture of the_lt_br /_gt_\n\tshadow generator does not account for the trans-_lt_br /_gt_\n\tparent parts of the texture._lt_br /_gt_\n\tAs stated in our last post we could not find rele-_lt_br /_gt_\n\tvant code in the standard shader that differs_lt_br /_gt_\n\tfrom our approach_co_ therefor we think it coult be_lt_br /_gt_\n\ta setting in the shadow generator.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much for your time_lt_br /_gt_\n\t- Mainequin Team\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mainequin","Date":"2017-09-20T10:03:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIs there no solution for this problem?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-20T17:56:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry for the late reply\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the fix_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VZKI0U%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#VZKI0U#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheck lines #202_co_ #209\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]