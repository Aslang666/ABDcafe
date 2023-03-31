const columns = [{
	text: '广东',
	value: 'Guangdong',
	children: [{
			text: '广州',
			value: 'Guangzhou',
			children: [{
					text: '天河区',
					value: 'Tianhe'
				},
				{
					text: '海珠区',
					value: 'Haizhu'
				},
				{
					text: '荔湾区',
					value: 'Liwan'
				},
				{
					text: '越秀区',
					value: 'Yuexiu'
				},
				{
					text: '番禺区',
					value: 'Panyu'
				},
				{
					text: '黄埔区',
					value: 'Huangpu'
				},
				{
					text: '白云区',
					value: 'Baiyun'
				},
				{
					text: '南沙区',
					value: 'Nansha'
				},
				{
					text: '从化区',
					value: 'Conghua'
				},
				{
					text: '增城区',
					value: 'Zengcheng'
				}
			]
		},
		{
			text: '深圳',
			value: 'Shenzhen',
			children: [{
					text: '福田区',
					value: 'Futian'
				},
				{
					text: '罗湖区',
					value: 'Luohu'
				},
				{
					text: '南山区',
					value: 'Nanshan'
				},
				{
					text: '宝安区',
					value: 'Baoan'
				},
				{
					text: '龙岗区',
					value: 'Longgang'
				},
				{
					text: '盐田区',
					value: 'Yantian'
				},
				{
					text: '龙华区',
					value: 'Longhua'
				},
				{
					text: '坪山区',
					value: 'Pingshan'
				},
				{
					text: '光明区',
					value: 'Guangming'
				}
			]
		},
		{
			text: '珠海',
			value: 'Zhuhai',
			children: [{
					text: '香洲区',
					value: 'Xiangzhou'
				},
				{
					text: '金湾区',
					value: 'Jinwan'
				},
				{
					text: '斗门区',
					value: 'Doumen'
				}
			]
		},
		{
			text: '汕头',
			value: 'Shantou',
			children: [{
					text: '金平区',
					value: 'Jinping'
				},
				{
					text: '龙湖区',
					value: 'Longhu'
				},
				{
					text: '澄海区',
					value: 'Chenghai'
				},
				{
					text: '潮阳区',
					value: 'Chaoyang'
				},
				{
					text: '潮南区',
					value: 'Chaonan'
				},
				{
					text: '濠江区',
					value: 'Haojiang'
				},
				{
					text: '南澳县',
					value: 'Nanao'
				}
			]
		}, {
			text: '韶关',
			value: 'Shaoguan',
			children: [{
					text: '浈江区',
					value: 'Zhenjiang'
				},
				{
					text: '武江区',
					value: 'Wujiang'
				},
				{
					text: '浈江区',
					value: 'Zhenjiang'
				},
				{
					text: '曲江区',
					value: 'Qujiang'
				},
				{
					text: '始兴县',
					value: 'Shixing'
				},
				{
					text: '仁化县',
					value: 'Renhua'
				},
				{
					text: '翁源县',
					value: 'Wengyuan'
				},
				{
					text: '乳源瑶族自治县',
					value: 'Ruyuan'
				},
				{
					text: '新丰县',
					value: 'Xinfeng'
				},
				{
					text: '乐昌市',
					value: 'Lechang'
				},
				{
					text: '南雄市',
					value: 'Nanxiong'
				}
			]
		},

		{
			text: '佛山',
			value: 'Foshan',
			children: [{
					text: '禅城区',
					value: 'Chancheng'
				},
				{
					text: '南海区',
					value: 'Nanhai'
				},
				{
					text: '顺德区',
					value: 'Shunde'
				},
				{
					text: '三水区',
					value: 'Sanshui'
				},
				{
					text: '高明区',
					value: 'Gaoming'
				},
			],
		}, {
			text: '江门',
			value: 'Jiangmen',
			children: [{
					text: '蓬江区',
					value: 'Pengjiang'
				},
				{
					text: '江海区',
					value: 'Jianghai'
				},
				{
					text: '新会区',
					value: 'Xinhui'
				},
				{
					text: '台山市',
					value: 'Taishan'
				},
				{
					text: '开平市',
					value: 'Kaiping'
				},
				{
					text: '鹤山市',
					value: 'Heshan'
				},
				{
					text: '恩平市',
					value: 'Enping'
				},
			],
		},
		{
			text: '湛江',
			value: 'Zhanjiang',
			children: [{
					text: '赤坎区',
					value: 'Chikan'
				},
				{
					text: '霞山区',
					value: 'Xiashan'
				},
				{
					text: '坡头区',
					value: 'Potou'
				},
				{
					text: '麻章区',
					value: 'Mazhang'
				},
				{
					text: '遂溪县',
					value: 'Suixi'
				},
				{
					text: '徐闻县',
					value: 'Xuwen'
				},
				{
					text: '廉江市',
					value: 'Lianjiang'
				},
				{
					text: '雷州市',
					value: 'Leizhou'
				},
				{
					text: '吴川市',
					value: 'Wuchuan'
				},
			],
		},
		{
			text: '茂名',
			value: 'Maoming',
			children: [{
					text: '茂南区',
					value: 'Maonan'
				},
				{
					text: '电白区',
					value: 'Dianbai'
				},
				{
					text: '高州市',
					value: 'Gaozhou'
				},
				{
					text: '化州市',
					value: 'Huazhou'
				},
				{
					text: '信宜市',
					value: 'Xinyi'
				},
			],
		},
		{
			text: '肇庆',
			value: 'Zhaoqing',
			children: [{
					text: '端州区',
					value: 'Duanzhou'
				},
				{
					text: '鼎湖区',
					value: 'Dinghu'
				},
				{
					text: '高要区',
					value: 'Gaoyao'
				},
				{
					text: '广宁县',
					value: 'Guangning'
				},
				{
					text: '怀集县',
					value: 'Huaiji'
				},
				{
					text: '封开县',
					value: 'Fengkai'
				},
				{
					text: '德庆县',
					value: 'Deqing'
				},
				{
					text: '四会市',
					value: 'Sihui'
				},
			],
		}, {
			text: '惠州',
			value: 'Huizhou',
			children: [{
					text: '惠城区',
					value: 'Huicheng'
				},
				{
					text: '惠阳区',
					value: 'Huiyang'
				},
				{
					text: '博罗县',
					value: 'Boluo'
				},
				{
					text: '惠东县',
					value: 'Huidong'
				},
				{
					text: '龙门县',
					value: 'Longmen'
				},
			],
		},
		{
			text: '梅州',
			value: 'Meizhou',
			children: [{
					text: '梅江区',
					value: 'Meijiang'
				},
				{
					text: '梅县区',
					value: 'Meixian'
				},
				{
					text: '大埔县',
					value: 'Dapu'
				},
				{
					text: '丰顺县',
					value: 'Fengshun'
				},
				{
					text: '五华县',
					value: 'Wuhua'
				},
				{
					text: '平远县',
					value: 'Pingyuan'
				},
				{
					text: '蕉岭县',
					value: 'Jiaoling'
				},
			],
		},
		{
			text: '汕尾',
			value: 'Shanwei',
			children: [{
					text: '城区',
					value: 'Chengqu'
				},
				{
					text: '海丰县',
					value: 'Haifeng'
				},
				{
					text: '陆河县',
					value: 'Luhe'
				},
				{
					text: '陆丰市',
					value: 'Lufeng'
				},
			],
		},
		{
			text: '河源',
			value: 'Heyuan',
			children: [{
					text: '源城区',
					value: 'Yuancheng'
				},
				{
					text: '紫金县',
					value: 'Zijin'
				},
				{
					text: '龙川县',
					value: 'Longchuan'
				},
				{
					text: '连平县',
					value: 'Lianping'
				},
				{
					text: '和平县',
					value: 'Heping'
				},
				{
					text: '东源县',
					value: 'Dongyuan'
				},
			],
		},
		{
			text: '阳江',
			value: 'Yangjiang',
			children: [{
					text: '江城区',
					value: 'Jiangcheng'
				},
				{
					text: '阳东区',
					value: 'Yangdong'
				},
				{
					text: '阳西县',
					value: 'Yangxi'
				},
				{
					text: '阳春市',
					value: 'Yangchun'
				},
				{
					text: '海陵岛经济开发试验区',
					value: 'Hailingdao'
				},
				{
					text: '高新技术产业开发区',
					value: 'Gaoxin'
				}
			]
		}, {
			text: '清远',
			value: 'Qingyuan',
			children: [{
					text: '清城区',
					value: 'Qingcheng'
				},
				{
					text: '清新区',
					value: 'Qingxin'
				},
				{
					text: '佛冈县',
					value: 'Fogang'
				},
				{
					text: '阳山县',
					value: 'Yangshan'
				},
				{
					text: '连山壮族瑶族自治县',
					value: 'Lianshan'
				},
				{
					text: '连南瑶族自治县',
					value: 'Liannan'
				},
				{
					text: '英德市',
					value: 'Yingde'
				},
				{
					text: '连州市',
					value: 'Lianzhou'
				},
				{
					text: '清新县',
					value: 'QingxinXian'
				}
			]
		},
		{
			text: '东莞',
			value: 'Dongguan',
			children: [{
					text: '莞城区',
					value: 'Guancheng'
				},
				{
					text: '南城区',
					value: 'Nancheng'
				},
				{
					text: '万江区',
					value: 'Wanjiang'
				},
				{
					text: '东城区',
					value: 'Dongcheng'
				},
				{
					text: '石碣镇',
					value: 'Shijie'
				},
				{
					text: '石龙镇',
					value: 'Shilong'
				},
				{
					text: '茶山镇',
					value: 'Chashan'
				},
				{
					text: '石排镇',
					value: 'Shipai'
				},
				{
					text: '企石镇',
					value: 'Qishi'
				},
				{
					text: '横沥镇',
					value: 'Hengli'
				},
				{
					text: '桥头镇',
					value: 'Qiaotou'
				},
				{
					text: '谢岗镇',
					value: 'Xiegang'
				},
				{
					text: '东坑镇',
					value: 'Dongkeng'
				},
				{
					text: '常平镇',
					value: 'Changping'
				},
				{
					text: '寮步镇',
					value: 'Liaobu'
				},
				{
					text: '大朗镇',
					value: 'Dalang'
				},
				{
					text: '黄江镇',
					value: 'Huangjiang'
				},
				{
					text: '清溪镇',
					value: 'Qingxi'
				},
				{
					text: '塘厦镇',
					value: 'Tangxia'
				},
				{
					text: '凤岗镇',
					value: 'Fenggang'
				},
				{
					text: '长安镇',
					value: 'Changan'
				},
				{
					text: '虎门镇',
					value: 'Humen'
				},
				{
					text: '厚街镇',
					value: 'Houjie'
				},
				{
					text: '沙田镇',
					value: 'Shatian'
				},
				{
					text: '道滘镇',
					value: 'Daojiao'
				},
				{
					text: '洪梅镇',
					value: 'Hongmei'
				},
				{
					text: '麻涌镇',
					value: 'Machong'
				},
				{
					text: '中堂镇',
					value: 'Zhongtang'
				},
				{
					text: '高埗镇',
					value: 'Gaobu'
				},
				{
					text: '樟木头镇',
					value: 'Zhangmutou'
				},
				{
					text: '大岭山镇',
					value: 'Dalingshan'
				},
				{
					text: '望牛墩镇',
					value: 'Wangniudun'
				}
			]
		}, {
			text: '中山',
			value: 'Zhongshan',
			children: [{
					text: '石岐区',
					value: 'Shiqi'
				},
				{
					text: '南区',
					value: 'Nanqu'
				},
				{
					text: '五桂山区',
					value: 'Wuguishan'
				},
				{
					text: '火炬开发区',
					value: 'Huojukaifaqu',
				},
				{
					text: '黄圃镇',
					value: 'Huangpu'
				},
				{
					text: '东凤镇',
					value: 'Dongfeng'
				},
				{
					text: '阜沙镇',
					value: 'Fusha'
				},
				{
					text: '小榄镇',
					value: 'Xiaolan'
				},
				{
					text: '东升镇',
					value: 'Dongsheng'
				},
				{
					text: '古镇镇',
					value: 'Guzhen'
				},
				{
					text: '横栏镇',
					value: 'Henglan'
				},
				{
					text: '三角镇',
					value: 'Sanjiao'
				},
				{
					text: '民众镇',
					value: 'Minzhong'
				},
				{
					text: '南朗镇',
					value: 'Nanlang'
				},
				{
					text: '港口镇',
					value: 'Gangkou'
				},
				{
					text: '大涌镇',
					value: 'Dachong'
				},
				{
					text: '沙溪镇',
					value: 'Shaxi'
				},
				{
					text: '三乡镇',
					value: 'Sanxiang'
				},
				{
					text: '板芙镇',
					value: 'Banfu'
				},
				{
					text: '神湾镇',
					value: 'Shenwan'
				}
			]
		},
		{
			text: '潮州',
			value: 'Chaozhou',
			children: [{
					text: '湘桥区',
					value: 'Xiangqiao'
				},
				{
					text: '潮安区',
					value: 'Chaoan'
				},
				{
					text: '饶平县',
					value: 'Raoping'
				}
			]
		},
		{
			text: '揭阳',
			value: 'Jieyang',
			children: [{
					text: '榕城区',
					value: 'Rongcheng'
				},
				{
					text: '揭东区',
					value: 'Jiedong'
				},
				{
					text: '揭西县',
					value: 'Jiexi'
				},
				{
					text: '惠来县',
					value: 'Huilai'
				},
				{
					text: '普宁市',
					value: 'Puning'
				}
			]
		},
		{
			text: '云浮',
			value: 'Yunfu',
			children: [{
					text: '云城区',
					value: 'Yuncheng'
				},
				{
					text: '云安区',
					value: 'Yunan'
				},
				{
					text: '新兴县',
					value: 'Xinxing'
				},
				{
					text: '郁南县',
					value: 'Yunan'
				},
				{
					text: '罗定市',
					value: 'Luoding'
				}
			]
		},

	]
}]

export default columns;