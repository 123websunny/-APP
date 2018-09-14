<template>
	<div style="width: 100%;height: 100%;margin: 0;padding: 0;background-color: #fff;position:relative;">
		<Header title="校园导航"></Header>
		<div class="content">
			<div id="map" class="map">
				<div class="detail" v-show="showInfoWindow">
					<el-row>
						<el-col :span="16">
							<div class="title">逸夫楼<span style="font-size: 12px;margin-left: 12px;">距你302米</span></div>
							<p>简介：楼层5层，主要包含30个教室和3个阶梯教室</p>
						</el-col>
						<el-col :span="8" class="r-review">

							<router-link to="/xydhNav">
								<div class="browes">
									<img src="../../../static/img/gohere.png" alt="" />
									<!--<p>去这里</p>-->
								</div>
							</router-link>

							<div class="close">
								<img src="../../../static/img/close.png" alt="" />
							</div>
						</el-col>
					</el-row>

				</div>

			</div>

		</div>
		<views></views>
	</div>
</template>

<script>
	import Header from '@/components/header';
	import Views from "@/components/views";

	export default {
		data() {
			return {
				showInfoWindow: false,
				showGroup: false
			}
		},
		mounted() {
			setTimeout(() => {
				this.addMap();
			}, 200)
		},
		components: {
			Header,
			Views
		},
		methods: {
			addMap() {
				var roadlayer = new ol.layer.Tile({
					visible: true,
					source: new ol.source.XYZ({
						projection: ol.proj.get('EPSG:4326'),
						url: 'http://t0.tianditu.com/DataServer?T=vec_c&x={x}&y={y}&l={z}'
					})
				});
				var labellayer = new ol.layer.Tile({
					visible: true,
					source: new ol.source.XYZ({
						projection: ol.proj.get('EPSG:4326'),
						url: 'http://t0.tianditu.com/DataServer?T=cva_c&x={x}&y={y}&l={z}'
					})
				});
				//初始化地图
				var map = new ol.Map({
					target: 'map',
					overlays: [],
					layers: [roadlayer, labellayer],
					view: new ol.View({
						center: [104.25897388, 30.81351971],
						extent: [104.15, 30.65, 104.5, 31],
						projection: ol.proj.get('EPSG:4326'),
						enableRotation: false,
						zoom: 12,

					})
				});

				var format = new ol.format.WKT();
				var data = [{
					"CODE": "51062001",
					"ORAGNNAME": "逸夫楼",
					"CAMERA": "XX",
					"WKT": "POINT (104.25897388 30.81351971)"
				}];
				var style = new ol.style.Style({
					image: new ol.style.Icon(({
						anchor: [0.5, 0.5],
						anchorXUnits: 'fraction',
						anchorYUnits: 'pixels',
						src: '../../../static/img/location.png'
					}))
				});
				var features = new Array();
				for(var i = 0; i < data.length; i++) {
					var feature = format.readFeature(data[i].WKT);
					feature.setStyle(style);
					features.push(feature);
				}
				var vectorSource = new ol.source.Vector({
					features: features
				});
				var vectorLayer = new ol.layer.Vector({
					source: vectorSource
				});
				map.addLayer(vectorLayer);

				var _this = this;
				map.on('click', function(evt) {
					var feature = map.forEachFeatureAtPixel(evt.pixel,
						function(feature) {
							return feature;
						});
					if(evt && feature) {
						_this.showInfoWindow = true;
					} else {
						_this.showInfoWindow = false;
					}
				});
			},
			showLayer() {
				this.showGroup = !this.showGroup;
			},
			showSearch() {
				debugger
			}
		}
	}
</script>
<style scoped>
	.login {
		/*width: 100%;
		position: absolute;
		top: 0;*/
		background: url(../../../static/img/bg.png) no-repeat 100% 100%;
		background-size: 100% 100%;
		/*background-repeat:no-repeat;*/
		z-index: -1;
		height: 320px;
	}
	
	.logo {
		width: 75%;
		margin-top: 20px;
	}
	
	.start {
		width: 25%;
		margin-top: 20px;
	}
	
	.mint-searchbar {
		background-color: #fff !important;
		border: 1px solid #bbb;
	}
	
	.licon {
		width: 24px;
		height: 24px;
		margin-top: 12px;
	}
	
	.el-row {
		border-bottom: 1px solid #dedede;
	}
	
	.detail {
		position: absolute;
		text-align: left;
		width: 100%;
		height: 100px;
		bottom: 55px;
		background-color: #fff;
		border: none;
		z-index: 999;
		border-bottom: 1px solid #dedede;
	}
	
	.detail .title {
		font-size: 18px;
		font-weight: 500;
		margin-left: 12px;
		margin-top: 12px;
	}
	
	.detail p {
		color: #333;
		margin-left: 12px;
		margin-top: 8px;
		font-size: 12px;
	}
	
	.el-row {
		border-bottom: none;
	}
	
	.r-review {
		position: relative;
	}
	
	.browes {
		margin-top: 12px;
		margin-left: 24px;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		/*background: linear-gradient(top left, #598eff, #7c66fe);*/
		color: #fff;
		text-align: center;
		margin-left: 20px;
	}
	
	.browes img {
		width: 64px;
		height: 64px;
		margin-top: 5px;
	}
	
	.browes p {
		color: #fff;
		margin: 0;
		font-size: 12px;
	}
	
	.close {
		position: absolute;
		top: 8px;
		right: 8px;
		width: 16px;
		height: 16px;
	}
	
	.close img {
		width: 12px;
		height: 12px;
	}
	
	.search {
		position: absolute;
		width: 90%;
		height: 60px;
		margin-left: 5%;
		margin-top: 10px;
	}
	/*.mint-searchbar{
		padding: 0 !important;
	}*/
	/*.mint-searchbar-cancel {
		display: none !important;
	}*/
	
	.layer {
		position: absolute;
		top: 105px;
		z-index: 999;
		right: 5%;
		border-radius: 5px;
		background-color: #fff;
		display: grid;
		font-size: 12px;
		width: 40px;
		color: #000;
		height: 40px;
		text-align: center;
	}
	
	.layer img {
		margin-top: 2px;
		width: 24px;
		height: 18px;
		margin-left: 8px;
	}
	
	.layergroup {
		position: absolute;
		bottom: 55px;
		width: 100%;
		height: 100px;
		z-index: 999;
		background-color: #fff;
		border-bottom: 1px solid #dedede;
	}
	
	.el-col-6 {
		padding: 12px;
		font-size: 12px;
	}
	
	.el-col-6 img {
		width: 100%;
		height: 100%;
		border: 2px solid #fff;
	}
	
	.el-col-6 img:hover {
		border: 2px solid #598EFF;
	}
	
	.el-col-6 img:active {
		border: 2px solid #598EFF;
	}
</style>