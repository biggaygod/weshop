package tech.wetech.weshop.goods.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import tech.wetech.weshop.goods.po.Channel;
import tech.wetech.weshop.service.IService;

@RequestMapping("/channel")
public interface ChannelService extends IService<Channel> {

}
