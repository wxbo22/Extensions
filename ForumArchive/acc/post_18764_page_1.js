[{"Owner":"zmahomedy","Date":"2015-11-20T15:24:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi I am trying to figure out my why my import babylon scene file is always not found._lt_/p_gt__lt_p_gt_I included it in the same location as my html files_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am not running it off a web server_co_ its running of my browser._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var canvas _eq_ document.getElementById(_qt_3dCanvas_qt_)_sm_\tvar engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\t\tvar scene_sm_\tBABYLON.SceneLoader.Load(_qt__qt__co_ _qt_t.babylon_qt__co_ engine_co_ function (newScene){    \tscene _eq_ newScene_sm_\t\tvar c _eq_ scene.getMeshByName(_qt_tetrahedron_qt_)_sm_    //Do what you want\t})_sm__lt_/pre_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_XMLHttpRequest cannot load file_dd_///C_dd_/Users/zmm/lifeprint/new/t.babylon.manifest?1448032895642. Cross origin requests are only supported for protocol schemes_dd_ http_co_ data_co_ chrome_co_ chrome-extension_co_ https_co_ chrome-extension-resource.t.checkManifestFile @ babylon.js_dd_2babylon.js_dd_3 XMLHttpRequest cannot load file_dd_///C_dd_/Users/zmm/lifeprint/new/t.babylon. Cross origin requests are only supported for protocol schemes_dd_ http_co_ data_co_ chrome_co_ chrome-extension_co_ https_co_ chrome-extension-resource.h @ babylon.js_dd_3babylon.js_dd_3 Uncaught Error_dd_ Error status_dd_ 0 - Unable to load t.babylon_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-11-20T15:38:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_I am not running it off a web server_co_ its running of my browser._lt_/span_gt__lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s the problem here. You cannot load external assets without a webserver._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-11-21T20:14:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Temechon is correct_co_ as always - and there is practically no way around this - I said practically_co_ which means that you_t_ll never be able to use the switches and to _qt_trick_qt_ your browser into believing it_t_s operating off a remote web server.  I_t_ve found a few basic operations which allow some exchange of elements locally -  such as using this command line parameter in Chrome_dd__lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_ _lt_span style_eq__qt_font-family_dd_Consolas_co_ Menlo_co_ Monaco_co_ _t_Lucida Console_t__co_ _t_Liberation Mono_t__co_ _t_DejaVu Sans Mono_t__co_ _t_Bitstream Vera Sans Mono_t__co_ _t_Courier New_t__co_ monospace_co_ sans-serif_sm_font-size_dd_13px_sm_background-color_dd_rgb(238_co_238_co_238)_sm__qt__gt_--allow-file-access-from-files_lt_/span_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_along with other formatting _qt_tricks_qt__co_ but this is at all worth trying.  It_t_s simply a security function (feature) in all browsers_co_ which won_t_t provide the local access necessary to serve your scenes locally on the same system.  Please don_t_t put any time in attempting to make this work_co_ as it simply will not._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You must be working off of a remote server - even if it_t_s in the next room or sitting next to your local system.  If you aren_t_t yet hosting a server_co_ then it_t_s time to do so._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-11-21T22:44:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I recently found this nice trick with python_dd__lt_br_gt_python.exe -m SimpleHTTPServer_lt_br_gt_This will start a local server in the directory you are running it at. Could be helpful here._lt_br_gt_Of course_co_ you need python installed _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]