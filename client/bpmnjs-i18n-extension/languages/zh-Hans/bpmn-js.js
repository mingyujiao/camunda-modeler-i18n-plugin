/**
 * Copyright 2021 FlowSquad GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This file contains the strings used in the bpmn-js module.
 */
export default {
    'Append {type}': '追加 {type}',
    'Add Lane above': '添加到通道之上',
    'Divide into two Lanes': '分成两条通道',
    'Divide into three Lanes': '分成三条通道',
    'Add Lane below': '添加到通道之下',
    'Append ReceiveTask': '追加接收任务',
    'Append MessageIntermediateCatchEvent': '追加 MessageIntermediateCatchEvent',
    'Append TimerIntermediateCatchEvent': '追加 TimerIntermediateCatchEvent',
    'Append ConditionIntermediateCatchEvent': '追加 ConditionIntermediateCatchEvent',
    'Append SignalIntermediateCatchEvent': '追加 SignalIntermediateCatchEvent',
    'Append compensation activity': '追加补偿活动',
    'Append EndEvent': '追加结束事件',
    'Append Gateway': '追加网关',
    'Append Task': '追加任务',
    'Append Intermediate/Boundary Event': '附加中间/边界事件',
    'Change type': '更改类型',
    'Connect using Association': '文本关联',
    'Connect using Sequence/MessageFlow or Association': '消息关联',
    'Connect using DataInputAssociation': '数据关联',
    'Remove': '移除',
    'no shape type specified': '未指定形状类型',
    'out of bounds release': '越界释放',
    'more than {count} child lanes': '超过 {count} 条通道',
    'element required': '需要元素',
    'no parent for {element} in {parent}': '在 {element} 中没有父元素 {parent}',
    'Create {type}': '创建 {type}',
    'Activate the hand tool': '启动手动工具',
    'Activate the lasso tool': '启动 Lasso 工具',
    'Activate the create/remove space tool': '启动创建/删除空间工具',
    'Activate the global connect tool': '启动全局连接工具',
    'Create StartEvent': '创建开始事件',
    'Create Intermediate/Boundary Event': '创建中间/边界事件',
    'Create EndEvent': '创建结束事件',
    'Create Gateway': '创建网关',
    'Create Task': '创建任务',
    'Create DataObjectReference': '创建数据对象参考',
    'Create DataStoreReference': '创建数据存储参考',
    'Create expanded SubProcess': '创建可折叠子流程',
    'Create Pool/Participant': '创建池/参与者',
    'Create Group': '创建组',
    'Parallel Multi Instance': '并行多实例',
    'Sequential Multi Instance': '串行多实例',
    'Loop': '循环',
    'Ad-hoc': 'Ad-hoc子流程',
    'element {element} referenced by {referenced}#{property} not yet drawn': '元素 {element} 的引用 {referenced}#{property} 尚未绘制',
    'unknown di {di} for element {semantic}': '元素 {semantic} 的未知 di {di}',
    'missing {semantic}#attachedToRef': '缺少 {semantic}#attachedToRef',
    '{semantic}#{side} Ref not specified': '{semantic}{side}Ref未指定',
    'already rendered {element}': '{element} 已呈现',
    'failed to import {element}': '{element} 导入失败',
    'multiple DI elements defined for {element}': '为{element}定义的多个DI元素',
    'no bpmnElement referenced in {element}': '在{element}中没有引用bpmnElement',
    'diagram not part of bpmn:Definitions': '图表不属于bpmn:定义的一部分',
    'no diagram to display': '没有要显示的图表',
    'no process or collaboration to display': '没有可显示的流程或协作',
    'correcting missing bpmnElement on {plane} to {rootElement}': '将{plane}上缺少的bpmn元素更正为{rootElement}',
    'unsupported bpmnElement for {plane}: {rootElement}': 'unsupported bpmnElement for {plane}: {rootElement}',
    'unrecognized flowElement {element} in context {context}': '上下文{context}中的未识别流程元素{element}',
    'HELLO {you}!': '你好 {you}!'
};
