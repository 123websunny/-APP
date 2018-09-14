<template>
	<div>
		<!--<div class="header" style="font-size:16px ;background-color: -webkit-gradient(linear,left top, right top,from(#598eff),to(#7c66fe));">
			<mt-header title="空闲教室查询">
				<router-link to="/zsjw" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>-->
		
		<mt-header title="空闲教室查询" class="header">
		  <router-link to="/zsjw" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="content">
			<div class='page-cell' style="margin-top: 12px;">
				<a class='mint-cell'>
					<div class='mint-cell-left'></div>
					<div class='mint-cell-wrapper'>
						<div class='mint-cell-title'>
							<span class='mint-cell-text'>日期</span>
						</div>
						<div class='mint-cell-value is-link' @click="$refs.datePicker.open()">{{displayDate||'请选择'}}</div>
						<div class='mint-cell-allow-right'></div>
					</div>
				</a>
			</div>
			<div class='page-cell'>
				<a class='mint-cell'>
					<div class='mint-cell-left'></div>
					<div class='mint-cell-wrapper'>
						<div class='mint-cell-title'>
							<span class='mint-cell-text'>教学楼</span>
						</div>
						<div class='mint-cell-value is-link' @click="popupVisible=true">{{free||'请选择'}}</div>
						<div class='mint-cell-allow-right'></div>
					</div>
				</a>
			</div>
			<div class='page-cell'>
				<a class='mint-cell'>
					<div class='mint-cell-left'></div>
					<div class='mint-cell-wrapper'>
						<div class='mint-cell-title'>
							<span class='mint-cell-text'>教室名称</span>
						</div>
						<div class='mint-cell-value'>
							<input class='mint-field-core' type="text" name="" id="" value='' placeholder="请输入教室名称" />
						</div>
					</div>
				</a>
			</div>
			<div class='page-cell'>
				<div class='mint-cell'>
					<div class='mint-cell-wrapper'>
						<div class='mint-cell-title class'>
							<span class='mint-cell-text'>节次</span>
						</div>
						<div class='' style="width: 90%;padding-bottom: 20px;">
							<label class="mint-checklist-label">
							<span class="mint-checkbox">
								<input type="checkbox" class="mint-checkbox-input" value="选项C">
									<span class="mint-checkbox-core"></span>
							</span>
              <span class="mint-checkbox-label">选项C</span>
            </label>
							<label class="mint-checklist-label">
							<span class="mint-checkbox">
								<input type="checkbox" class="mint-checkbox-input" value="选项C">
									<span class="mint-checkbox-core"></span>
							</span>
              <span class="mint-checkbox-label">选项C</span>
            </label>
							<label class="mint-checklist-label">
							<span class="mint-checkbox">
								<input type="checkbox" class="mint-checkbox-input" value="选项C">
									<span class="mint-checkbox-core"></span>
							</span>
              <span class="mint-checkbox-label">选项C</span>
            </label>
							<label class="mint-checklist-label">
							<span class="mint-checkbox">
								<input type="checkbox" class="mint-checkbox-input" value="选项C">
									<span class="mint-checkbox-core"></span>
							</span>
              <span class="mint-checkbox-label">选项C</span>
            </label>
							<label class="mint-checklist-label">
							<span class="mint-checkbox">
								<input type="checkbox" class="mint-checkbox-input" value="选项C">
									<span class="mint-checkbox-core"></span>
							</span>
              <span class="mint-checkbox-label">选项C</span>
            </label>
							<label class="mint-checklist-label">
							<span class="mint-checkbox">
								<input type="checkbox" class="mint-checkbox-input" value="选项C">
									<span class="mint-checkbox-core"></span>
							</span>
              <span class="mint-checkbox-label">选项C</span>
            </label>
						</div>
					</div>
				</div>
			</div>
			<div class='btn-wrap'>
				<button class="query-btn mint-button mint-button--primary mint-button--large" @click="query()">
        <!----> <label class="mint-button-text">查&nbsp;&nbsp;&nbsp;询</label>
      </button>
			</div>

			<mt-datetime-picker ref="datePicker" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" v-model="date">
			</mt-datetime-picker>
			<mt-popup v-model="popupVisible" position="bottom" style='width: 100%;'>
				<div class="bd-action">
					<a href="javascript:;" @click='popupVisible=false'>取消</a>
					<a href="javascript:;" @click='popupVisible=false'>确定</a>
				</div>
				<mt-picker :slots="buildings" @change="onValuesChange"></mt-picker>
			</mt-popup>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/header';
	import Views from "@/components/views";
	import { Picker } from 'mint-ui';

	export default {
		data() {
			return {
				date: '',
				free: '',
				popupVisible: false,
				build: '',
				buildings: [{

					values: ['逸夫楼', '理科大楼'],

					textAlign: 'center'
				}]

			}
		},
		watch: {
			date() {

			}
		},
		computed: {
			displayDate() {
				const date = this.date;
				if(!date) {
					return '';
				}
				return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
			},

		},
		mounted() {

		},
		components: {
			Header,
			Views,
			Picker
		},
		methods: {
			onValuesChange(picker, values) {

				this.free = values[0];
			},
			query() {
				this.$router.push({
					path: './cxjg'
				});
			}
		}
	}
</script>
<style scoped>
	
	.header {
		position: relative;
		font-size: 16px;
		left:0;
		top:0;
		height: 45px;
		width: 100%;
		background: linear-gradient(left,#598eff,#7c66fe); 
		color:#fff;
        z-index:100;
	}
	.theme{
		position: absolute;
		left: 0;
	}
	.theme .mint-button{
		background-color: transparent;
		border:0;
	}
	.mint-button--default{
		color:#fff;
	}
	.header p {
		display: flex;
		font-size: 20px;
		color: #fff;
		align-items: center;
		justify-content: center;
		height: 45px;
		margin: 0;
	}
	
	/*.mint-header {
		background: #6383ff !important;
	}*/
	
	.mint-cell-title {
		text-align: left;
	}
	
	.mint-field-core {
		text-align: right;
	}
	
	.mint-checkbox-core {
		border-radius: 0;
		width: 15px;
		height: 15px;
	}
	
	.mint-checkbox-core::after {
		top: 1px;
		left: 5px;
	}
	
	.mint-cell-title.class {
		width: 150px;
	}
	
	.mint-checklist-label {
		display: inline-block !important;
		margin-top: 20px;
		position: relative;
	}
	
	.mint-checklist-label input {
		display: inline-block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		opacity: 0;
		height: 100%;
	}
	
	.query-btn {
		margin: 20px auto 0 auto;
		width: 80%;
		background: -webkit-gradient(linear, left top, right top, from(#598eff), to(#7c66fe));
	}
	
	.bd-action {
		display: flex;
		padding: 5px 0;
	}
	
	.bd-action a {
		flex: 1;
		text-align: center;
		color: #26a2ff;
		text-decoration: none;
	}
</style>