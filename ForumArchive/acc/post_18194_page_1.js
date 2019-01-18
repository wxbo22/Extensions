[{"Owner":"ozRocker","Date":"2015-10-27T14:17:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m building a scene in Unity3D to export to Babylon which is a typical countryside.  It has trees and rocks but to optimise I was going to use the same tree and rock and drop them around the scene in different sizes and directions.  Unfortunately this has no effect when I export to Babylon.js.  Does anyone know the best way I can have one base tree mesh and one base rock mesh in my .babylon file and refer to those for all the duplicates?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-10-27T14:28:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_you could do one of the two - _lt_/p_gt__lt_p_gt_either use instances  - an array of instances with their own transformation in each mesh_t_s definition or use the same geometry and material id for each mesh you created. Instances will be better (performance will be much better) if you don_t_t want to change the objects except for transformation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_you can read about the file format here (couldn_t_t find it on the doc site using the search. Anyone?) - _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/Babylon.js-file-format_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/Babylon.js-file-format_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-10-27T14:38:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok cool_co_ that_t_s exactly what I need. Lots of rocks and trees.  Checking the doco now.  It looks like 3D Max and Blender supports instances for Babylon export but I can_t_t see any mention of it for Unity3D.  Does anyone know if there_t_s a way to specify an instance in Unity3D?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-10-27T14:42:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yep_co_ that would be my next question _dd_-) I know Blender exports instances_co_ I can_t_t see why unity wouldn_t_t. But I never used the unity exporter (not a big unity user)_co_ I hope someone can help with that!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-27T15:19:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Doc link_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/generals/File_Format_Map_(.babylon)_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/generals/File_Format_Map_(.babylon)_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-27T15:20:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Unity 3D does not support instances extraction for now (But if you are a c# developer that should be easy to add)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-27T15:55:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_question_dd_ How do you create instances in Unity?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-10-27T20:07:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think Unity has a concept of Prefabs_co_ but no instances. I might be wrong though._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-10-27T23:38:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeh_co_ they use prefabs _lt_a href_eq__qt_http_dd_//docs.unity3d.com/ScriptReference/PrefabUtility.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//docs.unity3d.com/ScriptReference/PrefabUtility.html_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-28T00:54:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_But is it like instances? You cannot use different materials?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-10-28T02:11:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can change its materials and it still retains its connection to the prefab_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-28T18:27:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_so it is a clone for babylonjs POV_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-02T07:08:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_103194_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18194_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1446056823_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_so it is a clone for babylonjs POV_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not sure what this means.  Is POV some kind of copy of another mesh?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve been checking out Babylon.js instances and Unity3D prefab instances.  With prefab instances you can add / remove / change components and materials as well as change the transform.  With Babylon.js instances you can only change the transform (position_co_ rotation_co_ scale).  That_t_s still very useful_co_ but I_t_m wondering if there_t_s a better way to represent prefab instances within Babylon.js so you can also include changes to components and materials.  Is this what POV is?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-12-02T08:18:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_DK is just saying that Unity.prefabs _eq_ Babylon.clone._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Unity prefabs are just clones from a babylon point of view (POV)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-02T08:46:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_107722_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18194_qt_ data-ipsquote-username_eq__qt_Temechon_qt_ data-cite_eq__qt_Temechon_qt_ data-ipsquote-timestamp_eq__qt_1449044284_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_DK is just saying that Unity.prefabs _eq_ Babylon.clone._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Unity prefabs are just clones from a babylon point of view (POV)._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ah ok.  Can clones be stored in the .babylon file or can they only be created via javascript code during runtime?  I_t_m just trying to determine whether its possible to store prefab instances as clones within the .babylon file_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-12-02T08:51:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think that clones are stored in the babylon file_co_ but as standard meshes_co_ so when you reload the scene_co_ it_t_s not clones anymore._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-02T09:11:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m trying to find a way that I can have the mesh data appear once within the .babylon file and all instances of that mesh just refer to that set of mesh data.  The only way I can think of doing that is by using BabylonJS instances.  It looks like cloning isn_t_t suitable if it makes another copy of the mesh data.  I thinking of scenes where I_t_d have 40 trees using the same mesh_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-02T16:18:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep in this case Instances are perfect_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-02T23:14:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok cool_co_ I will use instances.  Do you think there_t_s any way I can assign different materials to different instances?  I know they currently don_t_t support that_co_ but I thought maybe there could be a workaround_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-03T00:01:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No_co_ clone does that.  Instances must be identical vertices &amp_sm_ materials.  They can have skeletons_co_ but I never tried._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cloning saves you memory on cpu &amp_sm_ gpu_co_ but you need a separate draw call for each.  Shaders are actually built from materials.  This having the same shader allows for the gpu optimization of instances.  Thus there can never be different materials for instances._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-03T00:28:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_What would be cool is if there_t_s a way to combine them.  Like have a _qt_clone_qt_ defined in the .babylon file which is the same as a mesh but with the vertex data pointing to an existing mesh.  This may not give any gpu optimisation_co_ but my focus here is to reduce file-size.  If I have a mesh of a person with 20_co_000 polys and I want 5 of them in the scene with different shirt colours this would prevent the file-size from blowing out. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-03T15:38:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can do the cloning once the _qt_original_qt_ is loaded in Javascript_co_ of course.  3 lines really_dd_ b_eq_ a.clone()_sm_ b.material_eq_..._sm_ b.position_eq_..._sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Changing the .babylon format to handle clones would require changes in the loading process_co_ and any exporter that supported it.  Does not seem worth it_co_ when it can still be done afterward._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Think you could still achieve the effect of your example_co_ by using instances.  Each instance would have the same color tee shirt. Just put a different decal on the front.  True_co_ Decals I do not believe are exportable_co_ but as they say_dd_ _qt_Life is hard_co_ and then you die._qt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"exc_html5","Date":"2016-06-12T16:34:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi everyone_co_ was following this thread as I was about to create a scene in Unity and was hoping there was a way to designate objects as instances or clones upon export. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ is the Unity exporter still exporting a mesh for every object even if they are all using the same pre-fab?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"exc_html5","Date":"2016-06-12T16:38:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMight throw out that I did download the latest exporter_co_ drag a pre-fab into my unity scene_co_ and duplicated it a bunch of times. When I export_co_ the filesize gets pretty big and in the code it looks like it_t_s creating a diff mesh for every duplicate of the pre-fab. (far as I can tell). \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-06-13T12:04:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_132124_qt_ data-ipsquote-contentid_eq__qt_18194_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1465749507_qt_ data-ipsquote-userid_eq__qt_20944_qt_ data-ipsquote-username_eq__qt_exc_html5_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t19 hours ago_co_ exc_html5 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMight throw out that I did download the latest exporter_co_ drag a pre-fab into my unity scene_co_ and duplicated it a bunch of times. When I export_co_ the filesize gets pretty big and in the code it looks like it_t_s creating a diff mesh for every duplicate of the pre-fab. (far as I can tell). \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis shouldn_t_t be the case.  I actually implemented the part of the exporter where prefabs get converted to instances because I had scenes with 100 trees and rocks and the exported scenes were simply unusable.  However_co_ on inspection of the GITHub repo I_t_ve noticed that all the code I wrote has been removed. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/9f9b85108ac709fe132c0af8a8724fb782b319ec_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commit/9f9b85108ac709fe132c0af8a8724fb782b319ec_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see the mention of prefabs in SceneBuilder.cs\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo yeh_co_ goodbye instances.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]