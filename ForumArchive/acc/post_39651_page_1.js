[{"Owner":"igargi","Date":"2018-08-27T06:51:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_small_sm__qt__gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_small_sm__qt__gt_\n\tI_t_m using BabylonJS with angular and a file of about 35Mb. If I test it on the BabylonJS_t_ sandbox_co_ the quality is perfect and the optimization is the best.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_small_sm__qt__gt_\n\tIf I open the file with my page (the one with white background)_co_ the render quality is much lower_co_ to the point that the lines are a bunch of small rectangles.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_small_sm__qt__gt_\n\tI_t_ve seen this post (_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/30844-low-quality-rendering-in-chrome/_qt_ rel_eq__qt__qt_ style_eq__qt_color_dd_#7e57c2_sm__qt__gt_http_dd_//www.html5gamedevs.com/topic/30844-low-quality-rendering-in-chrome/_lt_/a_gt_) but both canvas are really similar in size_co_ so I really don_t_t know what I_t_m missing in order to get a correct rendering.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_small_sm__qt__gt_\n\tThanks for your time.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_small_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_19772_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/babylonSandbox.png.4418e621b338640f1fa4dddfa379e7f4.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_babylonSandbox.thumb.png.58f335c472c6bf454cfa551f171b8c43.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19772_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/babylonSandbox.thumb.png.58f335c472c6bf454cfa551f171b8c43.png_qt_ /_gt__lt_/a_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_19771_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/babylonMyPage.png.89c25ede375ccca2bd695804e912fe67.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_babylonMyPage.thumb.png.1568c08c72dbec9f63a49e5f9cb50a1b.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19771_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/babylonMyPage.thumb.png.1568c08c72dbec9f63a49e5f9cb50a1b.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_pre_gt_\n\n_lt_code_gt_ ngAfterViewInit()_dd_ void {\n    if (this.babylonSupported) {\n        this.canvas _eq_ this.el.nativeElement_sm_\n        this.engine _eq_ new BABYLON.Engine(this.canvas_co_ false)_sm_\n        this.engine.loadingUIBackgroundColor _eq_ _t_#03528f_t__sm_  \n        \n        // Resize\n        window.addEventListener(_t_resize_t__co_ () _eq_&gt_sm_ {\n            this.engine.resize()_sm_\n        })_sm_\n\n        // Find the default scene\n        this.devices.forEach(element _eq_&gt_sm_ {\n          element.children.forEach(child _eq_&gt_sm_ {\n            if (child.default) {\n              this.defaultScene _eq_ child.file_sm_\n            }\n          })_sm_\n        })_sm_\n\n        // Call the default scene\n        this.createScene(this.defaultScene)_sm_ \n\n       \n    }\n }\n\n  createScene(Model_dd_ any)_dd_ void{\n    this.isLoading _eq_ true_sm_\n      console.log(_t_createScene called_t_)_sm_\n        // Scene_co_ light and camera\n        const scene _eq_ new BABYLON.Scene(this.engine)_sm_\n        scene.clearColor _eq_ new BABYLON.Color4(1_co_ 1_co_ 1_co_ 1)_sm_\n        const light _eq_ new BABYLON.HemisphericLight(_t_light_t__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\n        const camera _eq_ new BABYLON.ArcRotateCamera(_t_Camera_t__co_ Math.PI / 2_co_ Math.PI / 2_co_ 50_co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_\n        camera.attachControl(this.canvas)_sm_\n        camera.inertia _eq_ 0.2_sm_\n\n\n        // Assets manager\n        const assetsManager _eq_ new BABYLON.AssetsManager(scene)_sm_\n        const meshTask _eq_ assetsManager.addMeshTask(_t_sceneTask_t__co_ _t__t__co_ _t__t__co_ Model)_sm_\n     \n\n        // Different materials\n        const MaterialRojo _eq_ new BABYLON.StandardMaterial(_t_MaterialRojo_t__co_ scene)_sm_\n        MaterialRojo.diffuseColor _eq_ BABYLON.Color3.Red()_sm_\n        const MaterialVerde _eq_ new BABYLON.StandardMaterial(_t_true_t__co_ scene)_sm_\n        MaterialVerde.diffuseColor _eq_ BABYLON.Color3.Green()_sm_\n\n        // Initialization of GUI\n        const advancedTexture _eq_ AdvancedDynamicTexture.CreateFullscreenUI(_t_UI_t_)_sm_\n        const button1 _eq_ BABYLON.GUI.Button.CreateSimpleButton(_t_but1_t__co_ _t__lt_span class_eq__qt_ipsEmoji_qt__gt_📷_lt_/span_gt_ Resetear cámara_t_)_sm_\n        button1.horizontalAlignment _eq_ BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER_sm_\n        button1.verticalAlignment _eq_ BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM_sm_\n        button1.width _eq_ _t_200px_t__sm_\n        button1.height _eq_ _t_40px_t__sm_\n        button1.color _eq_ _t_white_t__sm_\n        button1.background _eq_ _t_#01579b_t__sm_\n        button1.onPointerUpObservable.add(function() {\n          camera.alpha _eq_ Math.PI / 2_sm_\n          camera.beta _eq_ Math.PI / 2_sm_\n          camera.radius _eq_ 50_sm_\n          camera.target _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)_sm_\n        })_sm_\n        advancedTexture.addControl(button1)_sm_  \n\n        // Handle success &amp_sm_ error\n        meshTask.onSuccess _eq_ function (task) {\n          console.log(_t_asset task on success_t_)_sm_\n            for (let i _eq_ 0_sm_ i &lt_sm_ task.loadedMeshes.length_sm_ i++){\n              task.loadedMeshes[i].isPickable _eq_ true_sm_\n            }\n        }_sm_\n    \n        meshTask.onError _eq_ function (task) {\n          this.errorLoading _eq_ true_sm_\n        }_sm_\n\n        // Handle clicks\n        scene.onPointerDown _eq_ function (evt_co_ pick) {\n          if (pick.hit){\n            console.log(pick.pickedMesh.name)_sm_\n          }\n        }_sm_\n        \n        assetsManager.onProgress _eq_ (remainingCount_co_ totalCount) _eq_&gt_sm_ {\n          console.log(remainingCount_co_ totalCount)_sm_\n        }_sm_\n\n        assetsManager.onFinish _eq_ (tasks) _eq_&gt_sm_ {\n          this.isLoading _eq_ false_sm_\n          scene.debugLayer.show()_sm_\n          scene.debugLayer.hide()_sm_\n          this.engine.resize()_sm_\n\n\n          console.log(_t_finished loading asset_t_)_sm_\n    \n          this.engine.runRenderLoop(function () {\n                scene.render()_sm_\n            })_sm_\n        }_sm_\n\n        assetsManager.load()_sm_\n  }\n\n emitResize() {\n  this.engine.resize()_sm_\n }_lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"vlad.b","Date":"2018-08-27T07:56:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m not the expert_co_ but as far as I know the second param on the Engine constructor is WebGL antialiasing (please correct me if I_t_m wrong). I_t_d try setting it to true and see if that changes anything._lt_br /_gt_\n\t_lt_br /_gt_\n\tReference_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.engine#constructor_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/api/classes/babylon.engine#constructor_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-27T16:22:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24503-vladb/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24503_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24503-vladb/_qt_ rel_eq__qt__qt__gt_@vlad.b_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]