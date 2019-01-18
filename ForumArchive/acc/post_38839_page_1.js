[{"Owner":"ozRocker","Date":"2018-07-14T10:53:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs it possible to define polygroups or vertex groups?  I know Blender allows you to define vertex groups.  Is there a way to include that info in the .babylon export?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically I want to be able to manipulate bodyparts vertices (not armature)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-07-14T12:49:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou run so fast _dd_)))))) \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-07-14T13:00:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti try mix 2 morph vertex (first frame and last frame ) in one vertex buffer and send to shader \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthat lose some Unrecognizable detail now i wanna attach motion \n_lt_/p_gt_\n\n_lt_p_gt_\n\tso after that i have one mesh but have some small morph too _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ but _lt_/span_gt_ i don_t_t  have result yet but  in this task you wanna change raw data to grouped data\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthat is possible but if you ask to linked animation to them (like rig) it is different it is like write 3d geometry manager app in web\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-07-14T13:52:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI checked and it looks like groups are parsed in the OBJ importer\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_public obj _eq_ /^o/_sm_\npublic group _eq_ /^g/_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tbut _qt_group_qt_ and _qt_obj_qt_ will both create a new mesh\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_//Define a mesh or an object\n//Each time this keyword is analysed_co_ create a new Object with all data for creating a babylonMesh\n} else if (this.group.test(line) || this.obj.test(line)) {\n//Create a new mesh corresponding to the name of the group.\n//Definition of the mesh_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tMaybe I can hack the OBJ importer to create array pointers to the groups.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s no animation here_co_ but I want to avoid morph targets _t_cos I want to manipulate the vertices mathematically\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2018-07-14T16:39:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou might be able to use the Tower of Babel exporter for this.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve done this to make my character blink / squint.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-14T17:19:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_221780_qt_ data-ipsquote-contentid_eq__qt_38839_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531576330_qt_ data-ipsquote-userid_eq__qt_12544_qt_ data-ipsquote-username_eq__qt_ozRocker_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ ozRocker said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMaybe I can hack the OBJ importer to create array pointers to the groups.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNot quite sure what you are after_co_ but you could write your own custom mesh merge as well_co_ if you want the meshes together and your own grouping._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_merge_meshes#use-your-own-merge-function_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_merge_meshes#use-your-own-merge-function_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-11-24T01:04:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI finally got off my lazy ass and implemented a solution.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see the result here_dd_ _lt_a href_eq__qt_http_dd_//preview.punkoffice.com/bodyparts_qt_ rel_eq__qt_external nofollow_qt__gt_preview.punkoffice.com/bodyparts_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI altered the mesh.py file of the Blender exporter to parse the vertex groups.  If anyone wants to see the code changes I_t_ve attached my version of mesh.py.  The bits I added have # _NEW_ before the code.  I_t_m not great at Python so maybe it can be improved.  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ this might be of use to you if you want to incorporate vertex groups.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo the extra JSON in the .babylon file looks like this_dd_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt__qt_vertexGroups_qt__dd_[{_qt_name_qt__dd__qt_waist_qt__co__qt_id_qt__dd__qt_waist_qt__co__qt_indices_qt__dd_[4053_co_4054_co_4055_co_405_co_ etc....]}]_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIn the Babylon.js code in the Mesh.parse function I added this ( _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ if you want to incorporate vertex groups you can use this)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            // Vertex groups\n            if (parsedMesh.vertexGroups) {\n                mesh.vertexGroups _eq_ parsedMesh.vertexGroups_sm_\n            }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI also had to add a new function to find the vertex group_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.Mesh.prototype.getVertexGroupByName _eq_ function(vgName) {\n    for (var i_eq_0_sm_ i&lt_sm_this.vertexGroups.length_sm_ i++) {\n        if (this.vertexGroups[i].name _eq__eq_ vgName) return this.vertexGroups[i]_sm_\n    }\n    return null_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure if this is the best way so feel free to ignore if its not efficient_co_ but it works for my needs.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_21176_qt__gt_mesh.py_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-11-25T16:22:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUp to my ears in 2.80 changes &amp_sm_ TOB improvements right now.  Will look at your file_co_ but not right now.  The tricky part about geometry exporting is multiple materials.  Border vertices get duplicated across sub-meshes.  Anything like this would have to be optional_co_ since it would add to the file size in a significant way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are going to be many changes to the next version of mesh.py.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]