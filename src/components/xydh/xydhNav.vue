<template>
	<div style="width: 100%;height: 100%;margin: 0;padding: 0;background-color: #fff;">
		<mt-header title="导航路径">
			<router-link to="/xydh" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="find">
			<el-row>
				<el-col :span="4" class="find-name">
					<div>出发</div>
					<div>到达</div>
				</el-col>
				<el-col :span="14">
					<div class="start">
						<i></i>
						<input type="text" placeholder="7号宿舍楼" />
					</div>
					<div class="end">
						<i></i>
						<input type="text" placeholder="逸夫楼" />
					</div>
				</el-col>
				<el-col :span="6" class="right">
					<el-row>
						<el-col :span="8">
							<img src="../../../static/img/round.png" class="round" />
						</el-col>
						<el-col :span="12">
							<button type="button" class="search">搜索</button>
						</el-col>
						<el-col :span="4">
							
						</el-col>
					</el-row>

				</el-col>
			</el-row>
		</div>
		<div id="map" class="map"></div>
	</div>
</template>

<script>
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
		components: {},
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
					"WKT": "POINT (104.28897388 30.83351971)"
				}, {
					"CODE": "51062001",
					"ORAGNNAME": "逸夫楼",
					"CAMERA": "XX",
					"WKT": "POINT (104.23797388 30.78251971)"
				}, {
					"CODE": "51062001",
					"ORAGNNAME": "逸夫楼",
					"CAMERA": "XX",
					"WKT": "LINESTRING(104.28897388 30.83351971,104.25797388 30.78251971,104.23797388 30.78251971)"
				}];
				var sstyle = new ol.style.Style({
					image: new ol.style.Icon(({
						anchor: [0.5, 1],
						anchorXUnits: 'fraction',
						anchorYUnits: 'fraction',
						src: '../../../static/img/startp.png'
					}))
				});
				var estyle = new ol.style.Style({
					image: new ol.style.Icon(({
						anchor: [0.5, 1],
						anchorXUnits: 'fraction',
						anchorYUnits: 'fraction',
						src: '../../../static/img/endp.png'
					}))
				});
				var lstyle = new ol.style.Style({
					stroke: new ol.style.Stroke({
						color: '#598EFF',
						width: 6
					})
				});
				var features = new Array();
				for(var i = 0; i < data.length; i++) {
					var feature = format.readFeature(data[i].WKT);
					if(i == 0) {
						feature.setStyle(estyle);
					} else if(i == 1) {
						feature.setStyle(sstyle);
					} else {
						feature.setStyle(lstyle);
					}

					features.push(feature);
				}
				var vectorSource = new ol.source.Vector({
					features: features
				});
				var vectorLayer = new ol.layer.Vector({
					source: vectorSource
				});
				map.addLayer(vectorLayer);

			},
		}
	}
</script>

<style>
	.top {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
	
	.mint-header {
		background: linear-gradient(left, #598eff, #7c66fe) !important;
	}
	
	.find {
		width: 100%;
		height: 64px;
		margin: 10px 0;
		text-align: center;
	}
	
	input {
		border: 0;
		height: 30px;
		font-size: 16px;
		outline: none;
	}
	
	input:active {
		border: 0;
	}
	
	.find-name div {
		height: 30px;
		line-height: 30px;
		padding: 2px 0;
	}
	
	.start {
		border-bottom: 1px solid #dedede;
		height: 29px;
		line-height: 29px;
		padding: 2px 0;
	}
	
	.start i {
		    width: 6px;
    height: 6px;
    border-radius: 50%;
    color: #5dc87e;
    position: absolute;
    /* left: 20px; */
    margin-left: -12px;
    margin-top: 12px;
    /* z-index: 999; */
    background: #5dc87e;
	}
	.end i {
		    width: 6px;
    height: 6px;
    border-radius: 50%;
    color: #FF5153;
    position: absolute;
    /* left: 20px; */
    margin-left: -12px;
    margin-top: 12px;
    /* z-index: 999; */
    background: #FF5153;
	}
	.end {
		height: 30px;
		line-height: 30px;
		padding: 2px 0;
	}
	
	.round {
		width: 24px;
    height: 24px;
    margin-top: 18px;
	}
	
	.right {
		height: 64px;
		line-height: 64px;
	}
	
	.search {
		border: 0;
		font-size: 16px;
		background-color: #fff;
		outline: none;
	}
</style>