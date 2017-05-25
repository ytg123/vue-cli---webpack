<template>
	<div>
		<div class="mui-content-padded">
			<div class="mui-row">
				<div class="mui-col-xs-12 mui-text-center">
					<img src="../assets/img/b.jpg" alt="" width="70" height="70" :style="img"/>
					<p>
						<a href="">注册</a>/<a href="">登录</a>
					</p>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-row">
				<div class="mui-col-xs-12">
					<ul class="mui-table-view">
					        <li class="mui-table-view-cell">
					            <a class="mui-navigate-right">
					               <i class="mui-icon mui-icon-person"></i>
					               <span>我的信息</span>
					            </a>
					        </li>
					        <li class="mui-table-view-cell">
					            <a class="mui-navigate-right">
					                <i class="mui-icon mui-icon-star-filled"></i>
					                <span>我的勋章</span>
					            </a>
					        </li>
					        <li class="mui-table-view-cell">
					            <a class="mui-navigate-right">
					                <i class="mui-icon mui-icon-starhalf"></i>
					                <span>我的收藏</span>
					            </a>
					        </li>
					    </ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				img:"border-radius:50%;margin-bottom:5px;"
			}
		}
	}
</script>

<style scoped>
	.mui-content-padded{background-color: #3ABDF9;min-height: 140px;margin: 0;padding: 10px;}
	.mui-content-padded a{color:#fff;}
</style>