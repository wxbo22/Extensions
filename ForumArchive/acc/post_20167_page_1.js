[{"Owner":"RustySharpcloud","Date":"2016-01-27T14:05:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI realise my request is somewhat unusual_co_ but I have a requirement to load base64encoded images to a skybox as the reflectionTexture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can use base64 image strings quite easily for standard diffuse textures_co_ but I could not find a way to do this for a skybox (which pre-loades 6 images by appending _nx.jpg etc)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo the question is_dd_ Is there a way I can do this already? If not could it be added to babylon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to have code like\n_lt_/p_gt_\n\n_lt_p_gt_\n\tskyboxMaterial.reflectionTexture _eq_ new BABYLON.CubeTextureFromBase64(textureName_co_ image64px_co_ image64py_co_ image64pz_co_ image64nx_co_ image64ny_co_ image64nz_co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI managed to work around the problem for now by editing babylon.js and changing the LoadImage function to detect specific pattern in the imagename and load the base64 string diirect as the src when I need it_co_ but this is far from ideal going forward. (I_t_d happily prototype a function here too_co_ but it_t_s too complicated for me!!)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance and keep up the amazing work. Constantly amazed at how cool babylonjs is.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRusty\n_lt_/p_gt_\n\n_lt_p_gt_\n\tP.S. The reason I need to do this is because we have an offline version of our app the uses the WPF WebBrowser control. This works fine for normal images but created crossite exceptions in angular from babylon. Maybe there is another way to solve my problem_co_ but base64 seemed easy and has solved the standard texture issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-27T14:33:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmaybe this will help _dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/14967-texture-data-url/?do_eq_embed&amp_sm_embedComment_eq_84824&amp_sm_embedDo_eq_findComment_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RustySharpcloud","Date":"2016-01-27T15:09:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Jerome.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis shows me that I can use base64 as a texture (which is good)_co_ but my specific problem is using the CubeTexture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCubeTexture does some clever stuff under the hood_co_ which I_t_d be afraid to try and replicate in my own code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m already using the base64 stuff from Standard Materials. I have worked around the skybox issue for now_co_ but its a bit of a hack.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tApologies in advance_co_ if I have missing something obvious in your related post.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRusty\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-27T16:21:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ you are right this is not supported so far because of the 6 textures loading chain _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RustySharpcloud","Date":"2016-01-27T16:49:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the clarification Deltakosh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tis it something that might be added?\n_lt_/p_gt_\n\n_lt_p_gt_\n\trusty\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-27T16:54:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think so definitely. If you are open to share what you did\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RustySharpcloud","Date":"2016-01-27T23:44:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Deltakosh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMore than happy to share_co_ but not sure how helpful it will be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe edits I made are highlighted in red. As I said a bit hacky.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tkeep up the great work. I love bablylonjs!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t        Tools.LoadImage _eq_ function (url_co_ onload_co_ onerror_co_ database) {_lt_br_gt_\n\t            url _eq_ Tools.CleanUrl(url)_sm__lt_br_gt_\n\t            var img _eq_ new Image()_sm__lt_br_gt_\n\t            if (url.substr(0_co_ 5) !_eq__eq_ _qt_data_dd__qt_)_lt_br_gt_\n\t                img.crossOrigin _eq_ _t_anonymous_t__sm__lt_br_gt_\n\t            img.onload _eq_ function () {_lt_br_gt_\n\t                onload(img)_sm__lt_br_gt_\n\t            }_sm__lt_br_gt_\n\t            img.onerror _eq_ function (err) {_lt_br_gt_\n\t                Tools.Error(_qt_Error while trying to load texture_dd_ _qt_ + url)_sm__lt_br_gt_\n\t                img.src _eq_ _qt_data_dd_image/jpg_sm_base64_co_/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z_qt__sm__lt_br_gt_\n\t                onload(img)_sm__lt_br_gt_\n\t            }_sm__lt_br_gt_\n\t            var noIndexedDB _eq_ function () {_lt_br_gt__lt_span style_eq__qt_color_dd_#FF0000_sm__qt__gt_                if (window.external &amp_sm_&amp_sm_ window.external.IsDesktopApp) {_lt_br_gt_\n\t                    if (url.substr(0_co_ 14) _eq__eq__eq_ _qt_./image/skybox_qt_) {_lt_br_gt_\n\t                        url _eq_ window.external.getImage64(url.substring(8))_sm__lt_br_gt_\n\t                    }_lt_br_gt_\n\t                }_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                img.src _eq_ url_sm__lt_br_gt_\n\t            }_sm__lt_br_gt_\n\t            var loadFromIndexedDB _eq_ function () {_lt_br_gt_\n\t                database.loadImageFromDB(url_co_ img)_sm__lt_br_gt_\n\t            }_sm__lt_br_gt_\n\t            //ANY database to do!_lt_br_gt_\n\t            if (database &amp_sm_&amp_sm_ database.enableTexturesOffline &amp_sm_&amp_sm_ BABYLON.Database.IsUASupportingBlobStorage) {_lt_br_gt_\n\t                database.openAsync(loadFromIndexedDB_co_ noIndexedDB)_sm__lt_br_gt_\n\t            }_lt_br_gt_\n\t            else {_lt_br_gt_\n\t                if (url.indexOf(_qt_file_dd__qt_) _eq__eq__eq_ -1) {_lt_br_gt_\n\t                    noIndexedDB()_sm__lt_br_gt_\n\t                }_lt_br_gt_\n\t                else {_lt_br_gt_\n\t                    try {_lt_br_gt_\n\t                        var textureName _eq_ url.substring(5)_sm__lt_br_gt_\n\t                        var blobURL_sm__lt_br_gt_\n\t                        try {_lt_br_gt_\n\t                            blobURL _eq_ URL.createObjectURL(BABYLON.FilesInput.FilesTextures[textureName]_co_ { oneTimeOnly_dd_ true })_sm__lt_br_gt_\n\t                        }_lt_br_gt_\n\t                        catch (ex) {_lt_br_gt_\n\t                            // Chrome doesn_t_t support oneTimeOnly parameter_lt_br_gt_\n\t                            blobURL _eq_ URL.createObjectURL(BABYLON.FilesInput.FilesTextures[textureName])_sm__lt_br_gt_\n\t                        }_lt_br_gt_\n\t                        img.src _eq_ blobURL_sm__lt_br_gt_\n\t                    }_lt_br_gt_\n\t                    catch (e) {_lt_br_gt_\n\t                        img.src _eq_ null_sm__lt_br_gt_\n\t                    }_lt_br_gt_\n\t                }_lt_br_gt_\n\t            }_lt_br_gt_\n\t            return img_sm__lt_br_gt_\n\t        }_sm__lt_br_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-28T17:06:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk a bit too hacky _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ I need to think about it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RustySharpcloud","Date":"2016-01-28T19:19:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLOL_co_ very much agreed _dd_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom my perspective_co_ I_t_d like to be able to make a cubtexture by passing in the src for each of the 6 images. If I happen to pass 64baseencoded_co_ that is a bonus for me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomething like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tskyboxMaterial.reflectionTexture _eq_ new BABYLON.CubeTextureFromImages(textureName_co_ image_px_co_ image_py_co_ image_pz_co_ image_nx_co_ image_ny_co_ image_nz_co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe the existing CubeTexture could then call this with the extensions added_co_ so its all joined up.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.CubeTexture(textureName_co_ scene) {_lt_br_gt_\n\t            return CubeTextureFromImages(textureName_co_ textureName+_t__px.jpg_t__co_ textureName+_t__py.jpg_t__co_ textureName+_t__pz.jpg_t__co_ textureName+_t__nx.jpg_t__co_ textureName+_t__ny.jpg_t__co_ textureName+_t__nz.jpg_t__co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m sure there are very good reasons why its done the way it is... I tried to make the minimal edits to make it work for me... but I realise it will be a pain to maintain.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood luck and thanks again\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRusty\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-28T22:16:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTadammmm!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AVG8L%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AVG8L#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RustySharpcloud","Date":"2016-01-28T22:20:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou da man _dd_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut_co_ I get\n_lt_/p_gt_\n\n_lt_h4_gt_\n\tCompilation error\n_lt_/h4_gt_\n\n_lt_p_gt_\n\tObject doesn_t_t support property or method _t_CreateFromImages_t_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin the playground. _dd_-(\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes it need a newer version of babylonjs?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRusty\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RustySharpcloud","Date":"2016-01-29T18:22:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Deltkosh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHuge thanks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIts all working perfectly now... not sure what I did wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRusty\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]